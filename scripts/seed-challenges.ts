import { PrismaClient, ChallengeCategory } from '@prisma/client'

const prisma = new PrismaClient()

const challenges = [
  // Beginner Challenges
  {
    name: 'Git Init Master',
    description: 'Initialize a new Git repository in the current directory',
    category: ChallengeCategory.BEGINNER,
    task: 'Use git init to create a new repository',
    solution: 'git init',
    hints: ['Think about the command to start a new repository', 'It\'s a simple two-word command'],
    explanation: 'git init creates a new Git repository in the current directory. This is the first step in version controlling your project.',
    points: 10,
    difficulty: 1,
    tags: ['init', 'repository', 'basics']
  },
  {
    name: 'Stage Everything',
    description: 'Stage all files in the current directory for commit',
    category: ChallengeCategory.BEGINNER,
    task: 'Use git add to stage all files',
    solution: 'git add .',
    hints: ['You want to add all files', 'Use the dot to represent current directory'],
    explanation: 'git add . stages all files in the current directory. The dot (.) represents the current directory.',
    points: 10,
    difficulty: 1,
    tags: ['add', 'staging', 'basics']
  },
  {
    name: 'First Commit',
    description: 'Create your first commit with the message "Initial commit"',
    category: ChallengeCategory.BEGINNER,
    task: 'Use git commit with a message',
    solution: 'git commit -m "Initial commit"',
    hints: ['You need to commit with a message', 'Use the -m flag for message'],
    explanation: 'git commit -m "message" creates a new commit with the specified message. The -m flag allows you to add a commit message.',
    points: 15,
    difficulty: 2,
    tags: ['commit', 'message', 'basics']
  },
  {
    name: 'Check Status',
    description: 'Check the current status of your repository',
    category: ChallengeCategory.BEGINNER,
    task: 'Use git status to see repository state',
    solution: 'git status',
    hints: ['You want to see the current state', 'It\'s a simple status command'],
    explanation: 'git status shows the current state of your working directory and staging area.',
    points: 10,
    difficulty: 1,
    tags: ['status', 'basics']
  },
  {
    name: 'View History',
    description: 'View the commit history of your repository',
    category: ChallengeCategory.BEGINNER,
    task: 'Use git log to see commit history',
    solution: 'git log',
    hints: ['You want to see the history', 'Use the log command'],
    explanation: 'git log shows the commit history of the repository.',
    points: 10,
    difficulty: 1,
    tags: ['log', 'history', 'basics']
  },

  // Intermediate Challenges
  {
    name: 'Create Branch',
    description: 'Create a new branch called "feature"',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git branch to create a new branch',
    solution: 'git branch feature',
    hints: ['You want to create a new branch', 'Use the branch command'],
    explanation: 'git branch feature creates a new branch named "feature" but doesn\'t switch to it.',
    points: 15,
    difficulty: 3,
    tags: ['branch', 'intermediate']
  },
  {
    name: 'Switch Branch',
    description: 'Switch to the "feature" branch',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git checkout to switch branches',
    solution: 'git checkout feature',
    hints: ['You want to switch to a branch', 'Use checkout command'],
    explanation: 'git checkout feature switches to the "feature" branch.',
    points: 15,
    difficulty: 3,
    tags: ['checkout', 'branch', 'intermediate']
  },
  {
    name: 'Merge Branches',
    description: 'Merge the "feature" branch into the current branch',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git merge to combine branches',
    solution: 'git merge feature',
    hints: ['You want to merge a branch', 'Use the merge command'],
    explanation: 'git merge feature merges the "feature" branch into the current branch.',
    points: 20,
    difficulty: 4,
    tags: ['merge', 'branch', 'intermediate']
  },
  {
    name: 'Delete Branch',
    description: 'Delete the "feature" branch after merging',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git branch -d to delete a branch',
    solution: 'git branch -d feature',
    hints: ['You want to delete a branch', 'Use -d flag for safe delete'],
    explanation: 'git branch -d feature deletes the "feature" branch if it has been merged.',
    points: 15,
    difficulty: 3,
    tags: ['branch', 'delete', 'intermediate']
  },
  {
    name: 'Remote Add',
    description: 'Add a remote repository called "origin" with URL "https://github.com/user/repo.git"',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git remote add to connect to a remote repository',
    solution: 'git remote add origin https://github.com/user/repo.git',
    hints: ['You want to add a remote', 'Use remote add command'],
    explanation: 'git remote add origin URL adds a remote repository named "origin" with the specified URL.',
    points: 20,
    difficulty: 4,
    tags: ['remote', 'intermediate']
  },
  {
    name: 'Push to Remote',
    description: 'Push your commits to the remote repository',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git push to upload commits to remote',
    solution: 'git push origin main',
    hints: ['You want to push to remote', 'Specify remote and branch'],
    explanation: 'git push origin main pushes commits from the local main branch to the remote origin.',
    points: 20,
    difficulty: 4,
    tags: ['push', 'remote', 'intermediate']
  },
  {
    name: 'Pull Changes',
    description: 'Pull the latest changes from the remote repository',
    category: ChallengeCategory.INTERMEDIATE,
    task: 'Use git pull to download remote changes',
    solution: 'git pull origin main',
    hints: ['You want to pull changes', 'Specify remote and branch'],
    explanation: 'git pull origin main fetches and merges changes from the remote main branch.',
    points: 20,
    difficulty: 4,
    tags: ['pull', 'remote', 'intermediate']
  },

  // Advanced Challenges
  {
    name: 'Stash Changes',
    description: 'Temporarily save your uncommitted changes',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git stash to save work in progress',
    solution: 'git stash',
    hints: ['You want to save changes temporarily', 'Use stash command'],
    explanation: 'git stash temporarily saves your uncommitted changes and reverts the working directory.',
    points: 25,
    difficulty: 5,
    tags: ['stash', 'advanced']
  },
  {
    name: 'Apply Stash',
    description: 'Apply the most recent stashed changes',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git stash pop to restore stashed changes',
    solution: 'git stash pop',
    hints: ['You want to restore stashed changes', 'Use stash pop'],
    explanation: 'git stash pop applies the most recent stash and removes it from the stash list.',
    points: 25,
    difficulty: 5,
    tags: ['stash', 'advanced']
  },
  {
    name: 'Reset Hard',
    description: 'Reset your working directory to match the last commit (WARNING: destroys uncommitted changes)',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git reset --hard to discard all changes',
    solution: 'git reset --hard HEAD',
    hints: ['You want to reset to HEAD', 'Use --hard flag'],
    explanation: 'git reset --hard HEAD resets the working directory to match the last commit, discarding all changes.',
    points: 30,
    difficulty: 6,
    tags: ['reset', 'advanced']
  },
  {
    name: 'Rebase Interactive',
    description: 'Start an interactive rebase of the last 3 commits',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git rebase -i to rewrite commit history',
    solution: 'git rebase -i HEAD~3',
    hints: ['You want interactive rebase', 'Use -i flag and HEAD~3'],
    explanation: 'git rebase -i HEAD~3 starts an interactive rebase of the last 3 commits.',
    points: 35,
    difficulty: 7,
    tags: ['rebase', 'interactive', 'advanced']
  },
  {
    name: 'Cherry Pick',
    description: 'Apply a specific commit from another branch',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git cherry-pick to apply a specific commit',
    solution: 'git cherry-pick abc123',
    hints: ['You want to apply a specific commit', 'Use cherry-pick with commit hash'],
    explanation: 'git cherry-pick abc123 applies the commit with hash abc123 to the current branch.',
    points: 30,
    difficulty: 6,
    tags: ['cherry-pick', 'advanced']
  },
  {
    name: 'Submodule Add',
    description: 'Add a Git submodule to your repository',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git submodule add to include another repository',
    solution: 'git submodule add https://github.com/user/submodule.git',
    hints: ['You want to add a submodule', 'Use submodule add command'],
    explanation: 'git submodule add URL adds a submodule to your repository.',
    points: 35,
    difficulty: 7,
    tags: ['submodule', 'advanced']
  },
  {
    name: 'Blame File',
    description: 'Show who modified each line of a file',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git blame to see line-by-line history',
    solution: 'git blame filename.txt',
    hints: ['You want to see line history', 'Use blame command'],
    explanation: 'git blame filename.txt shows who modified each line of the file and when.',
    points: 25,
    difficulty: 5,
    tags: ['blame', 'advanced']
  },
  {
    name: 'Bisect Start',
    description: 'Start a binary search to find which commit introduced a bug',
    category: ChallengeCategory.ADVANCED,
    task: 'Use git bisect to find problematic commits',
    solution: 'git bisect start',
    hints: ['You want to start bisect', 'Use bisect start'],
    explanation: 'git bisect start begins a binary search to find the commit that introduced a bug.',
    points: 40,
    difficulty: 8,
    tags: ['bisect', 'debugging', 'advanced']
  }
]

async function seedChallenges() {
  try {
    // Clear existing challenges
    await prisma.challenge.deleteMany()
    console.log('Cleared existing challenges')
    
    // Insert new challenges
    const result = await prisma.challenge.createMany({
      data: challenges
    })
    console.log(`Successfully seeded ${result.count} challenges`)
    
    await prisma.$disconnect()
    process.exit(0)
  } catch (error) {
    console.error('Error seeding challenges:', error)
    await prisma.$disconnect()
    process.exit(1)
  }
}

seedChallenges() 