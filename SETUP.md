# Git Mastery - Setup Guide

This guide will help you set up the Git Mastery platform with Prisma and PostgreSQL.

## 🚀 Quick Start

### 1. Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **PostgreSQL 15+** - [Download here](https://www.postgresql.org/download/)
- **Git** - [Download here](https://git-scm.com/)

### 2. Database Setup

#### Option A: Local PostgreSQL

1. **Install PostgreSQL**
   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql

   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql

   # Windows
   # Download from https://www.postgresql.org/download/windows/
   ```

2. **Create Database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres

   # Create database
   CREATE DATABASE git_mastery;
   CREATE USER git_mastery_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE git_mastery TO git_mastery_user;
   \q
   ```

#### Option B: PostgreSQL on Docker

```bash
# Run PostgreSQL container
docker run --name git-mastery-db \
  -e POSTGRES_DB=git_mastery \
  -e POSTGRES_USER=git_mastery_user \
  -e POSTGRES_PASSWORD=your_password \
  -p 5432:5432 \
  -d postgres:15
```

### 3. Project Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/yourusername/git-mastery.git
   cd git-mastery
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local`:
   ```env
   # For local PostgreSQL
   DATABASE_URL="postgresql://git_mastery_user:your_password@localhost:5432/git_mastery"
   
   # For Docker PostgreSQL
   DATABASE_URL="postgresql://git_mastery_user:your_password@localhost:5432/git_mastery"
   
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   JWT_SECRET=your-jwt-secret-key-here
   ```

3. **Database Setup**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with challenges
   npm run db:seed
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

### Database Management
```bash
# Generate Prisma client (after schema changes)
npm run db:generate

# Push schema changes to database
npm run db:push

# Create and run migrations
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio

# Seed database with challenges
npm run db:seed
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm test
```

## 📊 Database Schema

### Core Models

#### User
- Basic user information (username, email, password)
- One-to-one relationship with UserProgress
- One-to-many relationships with achievements and attempts

#### UserProgress
- Tracks progress across all categories
- Stores scores, completion counts, and best times
- Daily challenge streak tracking

#### Challenge
- Challenge details (name, description, solution)
- Category classification (BEGINNER, INTERMEDIATE, ADVANCED)
- Hints, explanations, and metadata

#### ChallengeAttempt
- Records user attempts at challenges
- Tracks performance metrics (time, score, hints used)
- Links users to challenges

#### UserAchievement
- Tracks unlocked achievements
- Timestamp for when achievement was unlocked

#### DailyChallenge
- Records daily challenge completions
- Tracks scores and completion dates

## 🔧 Troubleshooting

### Common Issues

#### 1. Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
**Solution**: Ensure PostgreSQL is running
```bash
# macOS
brew services start postgresql

# Ubuntu/Debian
sudo systemctl start postgresql

# Check status
pg_isready
```

#### 2. Prisma Client Not Generated
```
Error: PrismaClient is not generated
```
**Solution**: Generate Prisma client
```bash
npm run db:generate
```

#### 3. Schema Push Fails
```
Error: P1001: Can't reach database server
```
**Solution**: Check DATABASE_URL in `.env.local`
```env
DATABASE_URL="postgresql://username:password@localhost:5432/git_mastery"
```

#### 4. Permission Denied
```
Error: permission denied for database
```
**Solution**: Grant database permissions
```sql
GRANT ALL PRIVILEGES ON DATABASE git_mastery TO your_user;
```

### Reset Database

If you need to start fresh:

```bash
# Drop and recreate database
psql -U postgres -c "DROP DATABASE IF EXISTS git_mastery;"
psql -U postgres -c "CREATE DATABASE git_mastery;"

# Reset Prisma
npm run db:push
npm run db:seed
```

## 🚀 Production Deployment

### Environment Variables
```env
# Production Database
DATABASE_URL="postgresql://user:password@host:5432/git_mastery"

# Security
NEXTAUTH_SECRET=your-production-secret
JWT_SECRET=your-production-jwt-secret

# URLs
NEXTAUTH_URL=https://yourdomain.com
```

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker Deployment
```bash
# Build image
docker build -t git-mastery .

# Run with environment
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://..." \
  -e NEXTAUTH_SECRET="..." \
  git-mastery
```

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the logs for error messages
3. Ensure all prerequisites are installed
4. Verify environment variables are correct
5. Try resetting the database

For additional help, please open an issue on GitHub. 