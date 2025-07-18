import chalk from 'chalk';
import inquirer from 'inquirer';
import { LoadLevels } from './manage-levels';

export interface DailyChallenge {
    id: string;
    name: string;
    description: string;
    task: string;
    solution: string;
    category: string;
    bonusPoints: number;
    date: string;
}

export async function getDailyChallenge(): Promise<DailyChallenge | null> {
    const today = new Date().toISOString().split('T')[0];
    
    // Generate a daily challenge based on the date
    const challenges = [
        {
            id: 'daily_1',
            name: 'Daily Git Status',
            description: 'Check the status of your repository',
            task: 'Use git status to see what files have changed',
            solution: 'git status',
            category: 'beginner',
            bonusPoints: 15
        },
        {
            id: 'daily_2',
            name: 'Daily Commit',
            description: 'Create a commit with today\'s date',
            task: 'Commit your changes with a descriptive message',
            solution: `git commit -m "Daily update ${today}"`,
            category: 'beginner',
            bonusPoints: 20
        },
        {
            id: 'daily_3',
            name: 'Daily Branch',
            description: 'Create a new branch for today\'s work',
            task: 'Create a branch named after today',
            solution: `git branch daily-${today}`,
            category: 'intermediate',
            bonusPoints: 25
        },
        {
            id: 'daily_4',
            name: 'Daily Stash',
            description: 'Save your work in progress',
            task: 'Stash your current changes',
            solution: 'git stash',
            category: 'advanced',
            bonusPoints: 30
        }
    ];
    
    // Use date to determine which challenge to show
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const challengeIndex = dayOfYear % challenges.length;
    
    return {
        ...challenges[challengeIndex],
        date: today
    };
}

export async function displayDailyChallenge(): Promise<void> {
    const challenge = await getDailyChallenge();
    
    if (!challenge) {
        console.log(chalk.yellow('No daily challenge available today.'));
        return;
    }
    
    console.log(chalk.cyan('\n📅 DAILY CHALLENGE'));
    console.log(chalk.yellow('═'.repeat(50)));
    console.log(chalk.white(`🎯 ${challenge.name}`));
    console.log(chalk.white(`📝 ${challenge.description}`));
    console.log(chalk.blue(`💡 ${challenge.task}`));
    console.log(chalk.green(`🏆 Bonus Points: ${challenge.bonusPoints}`));
    console.log(chalk.gray(`📅 Date: ${challenge.date}`));
    console.log(chalk.yellow('═'.repeat(50)));
}

export async function playDailyChallenge(): Promise<{ completed: boolean; score: number }> {
    const challenge = await getDailyChallenge();
    
    if (!challenge) {
        return { completed: false, score: 0 };
    }
    
    displayDailyChallenge();
    
    const { attempt } = await inquirer.prompt([
        {
            type: 'input',
            name: 'attempt',
            message: 'Enter your Git command:',
            prefix: '$'
        }
    ]);
    
    if (attempt.trim().toLowerCase() === challenge.solution.toLowerCase()) {
        console.log(chalk.green('✅ Daily challenge completed!'));
        console.log(chalk.green(`🏆 You earned ${challenge.bonusPoints} bonus points!`));
        return { completed: true, score: challenge.bonusPoints };
    } else {
        console.log(chalk.red('❌ Incorrect. The daily challenge remains unsolved.'));
        console.log(chalk.yellow(`💡 Hint: ${challenge.task}`));
        return { completed: false, score: 0 };
    }
} 