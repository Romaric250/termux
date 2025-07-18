import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { ChallengeCategory } from '@prisma/client'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')

    let where: any = {}

    if (category && category !== 'all') {
      where.category = category.toUpperCase() as ChallengeCategory
    }

    const [challenges, total] = await Promise.all([
      prisma.challenge.findMany({
        where,
        orderBy: [
          { difficulty: 'asc' },
          { createdAt: 'desc' }
        ],
        take: limit,
        skip: (page - 1) * limit,
      }),
      prisma.challenge.count({ where })
    ])

    return NextResponse.json({
      challenges,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching challenges:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const challengeData = await request.json()

    // Validation
    const requiredFields = ['name', 'description', 'category', 'task', 'solution', 'explanation']
    for (const field of requiredFields) {
      if (!challengeData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const challenge = await prisma.challenge.create({
      data: {
        name: challengeData.name,
        description: challengeData.description,
        category: challengeData.category.toUpperCase() as ChallengeCategory,
        task: challengeData.task,
        solution: challengeData.solution,
        explanation: challengeData.explanation,
        hints: challengeData.hints || [],
        tags: challengeData.tags || [],
        points: challengeData.points || 10,
        difficulty: challengeData.difficulty || 1,
        timeLimit: challengeData.timeLimit,
        isDaily: challengeData.isDaily || false,
        dailyDate: challengeData.dailyDate,
      }
    })

    return NextResponse.json(
      { 
        message: 'Challenge created successfully',
        challenge
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating challenge:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 