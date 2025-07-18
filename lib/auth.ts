import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from './prisma'
import { User, UserProgress } from '@prisma/client'

export interface AuthUser {
  id: string
  username: string
  email: string
  avatar?: string | null
  progress?: UserProgress | null
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(password, salt)
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET || 'fallback-secret',
    { expiresIn: '7d' }
  )
}

export async function verifyToken(token: string): Promise<AuthUser | null> {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: { progress: true }
    })
    return user
  } catch (error) {
    return null
  }
}

export async function createUserProgress(userId: string): Promise<UserProgress> {
  return prisma.userProgress.create({
    data: {
      userId,
      beginnerCompleted: 0,
      beginnerTotalScore: 0,
      intermediateCompleted: 0,
      intermediateTotalScore: 0,
      advancedCompleted: 0,
      advancedTotalScore: 0,
      grandTotalScore: 0,
      totalLevelsCompleted: 0,
      totalPlayTime: 0,
      dailyStreak: 0,
    }
  })
}

export async function updateUserProgress(
  userId: string, 
  category: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED', 
  score: number, 
  timeSpent?: number
): Promise<UserProgress> {
  const progress = await prisma.userProgress.findUnique({
    where: { userId }
  })

  if (!progress) {
    throw new Error('User progress not found')
  }

  const updateData: any = {
    grandTotalScore: progress.grandTotalScore + score,
    totalLevelsCompleted: progress.totalLevelsCompleted + 1,
  }

  switch (category) {
    case 'BEGINNER':
      updateData.beginnerCompleted = progress.beginnerCompleted + 1
      updateData.beginnerTotalScore = progress.beginnerTotalScore + score
      if (timeSpent && (!progress.beginnerBestTime || timeSpent < progress.beginnerBestTime)) {
        updateData.beginnerBestTime = timeSpent
      }
      break
    case 'INTERMEDIATE':
      updateData.intermediateCompleted = progress.intermediateCompleted + 1
      updateData.intermediateTotalScore = progress.intermediateTotalScore + score
      if (timeSpent && (!progress.intermediateBestTime || timeSpent < progress.intermediateBestTime)) {
        updateData.intermediateBestTime = timeSpent
      }
      break
    case 'ADVANCED':
      updateData.advancedCompleted = progress.advancedCompleted + 1
      updateData.advancedTotalScore = progress.advancedTotalScore + score
      if (timeSpent && (!progress.advancedBestTime || timeSpent < progress.advancedBestTime)) {
        updateData.advancedBestTime = timeSpent
      }
      break
  }

  return prisma.userProgress.update({
    where: { userId },
    data: updateData
  })
} 