import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Clear existing data
  await prisma.challengeAttempt.deleteMany()
  await prisma.userAchievement.deleteMany()
  await prisma.dailyChallenge.deleteMany()
  await prisma.userProgress.deleteMany()
  await prisma.user.deleteMany()
  await prisma.challenge.deleteMany()

  console.log('Cleared existing data')

  // Import and run the challenge seed
  const { default: seedChallenges } = await import('./seed-challenges')
  await seedChallenges()

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 