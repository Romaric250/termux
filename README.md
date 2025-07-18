# Git Mastery - Next-Level Learning Platform

### 🚀 Master Git through interactive challenges with a stunning web interface

**Git Mastery** is a revolutionary learning platform that transforms Git education through interactive challenges, gamification, and a beautiful web interface. Built with Next.js, Prisma, and PostgreSQL.

![Git Mastery Platform](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)
![Prisma](https://img.shields.io/badge/Prisma-5.7.0-blue?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.0-green?style=for-the-badge&logo=postgresql)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.0-blue?style=for-the-badge&logo=typescript)

## ✨ Features

### 🎯 **Interactive Learning Experience**
- **500+ Git Challenges** across 3 difficulty levels
- **Real-time Terminal Interface** with instant feedback
- **Progressive Difficulty** from beginner to advanced
- **Hands-on Practice** with real Git scenarios

### 🏆 **Gamification & Engagement**
- **Achievement System** with 8 unlockable badges
- **Leaderboard** showing top players worldwide
- **Daily Challenges** for consistent practice
- **Progress Tracking** with detailed statistics
- **Streak System** to maintain motivation

### 🎨 **Stunning Design**
- **Vintage Typography** with Playfair Display and Cinzel fonts
- **Smooth Animations** powered by Framer Motion
- **Dark Theme** optimized for developers
- **Responsive Design** works on all devices
- **Glass Morphism** effects for modern UI

### 🔐 **Advanced Authentication**
- **JWT-based Authentication** with secure sessions
- **User Registration & Login** with validation
- **Progress Persistence** across sessions
- **Profile Management** with avatar support

### 📊 **Comprehensive Analytics**
- **Personal Statistics** with detailed progress
- **Performance Metrics** with time tracking
- **Category Breakdown** for targeted learning
- **Achievement Tracking** with unlock history

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### **Backend**
- **PostgreSQL** - Reliable relational database
- **Prisma** - Type-safe database client
- **NextAuth.js** - Authentication
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT tokens

### **Development**
- **ESLint** - Code linting
- **Jest** - Testing framework
- **TypeScript** - Type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL 15+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/git-mastery.git
   cd git-mastery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/git_mastery"
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   JWT_SECRET=your-jwt-secret-here
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed the database
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

### **For Learners**
1. **Register** or **Login** to your account
2. **Choose a category** (Beginner, Intermediate, Advanced)
3. **Solve challenges** by entering Git commands
4. **Track progress** and unlock achievements
5. **Compete** on the leaderboard

### **For Developers**
1. **Explore challenges** in the interactive terminal
2. **Learn Git commands** with real-time feedback
3. **Practice scenarios** that mirror real-world usage
4. **Master advanced concepts** like rebasing and bisecting

## 📚 Challenge Categories

### 🌱 **Beginner (5 challenges)**
- Git initialization and setup
- Basic commits and staging
- Repository status and history
- Essential Git commands

### ⚡ **Intermediate (7 challenges)**
- Branching and merging
- Remote repository management
- Push and pull operations
- Branch management strategies

### 🚀 **Advanced (8 challenges)**
- Stashing and applying changes
- Reset and rebase operations
- Interactive rebasing
- Cherry-picking and submodules
- Git bisect for debugging

## 🏅 Achievement System

- **First Steps** 🌱 - Complete your first challenge
- **Beginner Master** 🌱 - Complete all beginner challenges
- **Intermediate Master** ⚡ - Complete all intermediate challenges
- **Advanced Master** 🚀 - Complete all advanced challenges
- **Perfect Score** 💯 - Get 100 points in a single session
- **Speed Runner** ⚡ - Complete 3 challenges quickly
- **Persistent Learner** 📅 - Play for 7 consecutive days
- **Git Guru** 👑 - Complete all challenges

## 🎨 Design Philosophy

### **Typography**
- **Playfair Display** - Elegant serif for headings
- **Cinzel** - Decorative font for special elements
- **JetBrains Mono** - Monospace for code
- **Inter** - Clean sans-serif for body text

### **Color Palette**
- **Git Dark** (#0d1117) - Primary background
- **Git Gray** (#21262d) - Secondary background
- **Git Blue** (#58a6ff) - Primary accent
- **Git Green** (#238636) - Success states
- **Git Orange** (#f78166) - Warning states
- **Git Purple** (#bc8cff) - Secondary accent

### **Animations**
- **Fade-in effects** for smooth page transitions
- **Floating elements** for visual interest
- **Typewriter effects** for dynamic text
- **Pulse glows** for interactive elements

## 🔧 API Endpoints

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### **Challenges**
- `GET /api/challenges` - Fetch challenges
- `POST /api/challenges` - Create challenge

### **User Progress**
- `GET /api/users/progress` - Get user progress
- `PUT /api/users/progress` - Update progress

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📦 Database Management

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Create and run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio

# Seed database
npm run db:seed
```

## 📦 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Docker**
```bash
# Build image
docker build -t git-mastery .

# Run container
docker run -p 3000:3000 git-mastery
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Adding Challenges**
1. Create new challenge in `scripts/seed-challenges.ts`
2. Run `npm run db:seed` to update database
3. Test the challenge in the web interface

### **Improving UI/UX**
1. Modify components in `app/` directory
2. Update styles in `app/globals.css`
3. Test responsiveness across devices

### **Enhancing Features**
1. Add new API endpoints in `app/api/`
2. Update Prisma schema in `prisma/schema.prisma`
3. Extend authentication in `lib/` directory

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Git** - The version control system that inspired this project
- **Next.js Team** - For the amazing React framework
- **Prisma Team** - For the type-safe database client
- **PostgreSQL** - For the reliable database
- **Framer Motion** - For the smooth animations
- **Tailwind CSS** - For the utility-first styling

## 🚀 Roadmap

### **Phase 1** ✅
- [x] Basic authentication
- [x] Challenge system
- [x] Progress tracking
- [x] Leaderboard

### **Phase 2** 🚧
- [ ] Real-time multiplayer challenges
- [ ] Custom challenge creation
- [ ] Advanced analytics dashboard
- [ ] Mobile app

### **Phase 3** 📋
- [ ] AI-powered hints
- [ ] Video tutorials integration
- [ ] Certification system
- [ ] Enterprise features

---

**Ready to master Git? Start your journey with Git Mastery today!** 🎮

[Get Started](http://localhost:3000) | [View Demo](http://localhost:3000/play) | [Documentation](https://docs.gitmastery.com)


