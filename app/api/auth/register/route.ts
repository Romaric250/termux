import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword, createUserProgress } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json()

    // Validation
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email or username already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create new user with progress
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        progress: {
          create: {
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
        }
      },
      include: {
        progress: true
      }
    })

    // Return user without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 