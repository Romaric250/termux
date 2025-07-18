import inquirer from 'inquirer';
import chalk from 'chalk';
import { user } from '../index-types';
import { FilterLevelsbyCategory, ParseLeveltoUser } from '../services/manage-levels';
import { UpdateUserProgress } from '../services/manage-users';
import { displayLeaderboard } from '../services/leaders-board';
import { displayAchievements, showAllAchievements } from '../services/achievements';
import { displayDailyChallenge, playDailyChallenge } from '../services/daily-challenges';

export async function startGame(user?: { username: string }) {
    console.log(chalk.cyan.bold(`\n🎮 Welcome to Termux Git Challenge, ${user ? user.username : 'Adventurer'}!`));
    console.log(chalk.yellow('Master Git commands through interactive challenges!\n'));

    let playing = true;
    let totalScore = 0;
    let levelsCompleted = 0;

    while (playing) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose your next move:',
                choices: [
                    '🎯 Play Challenges',
                    '📅 Daily Challenge',
                    '📊 View Stats', 
                    '🏆 Leaderboard',
                    '🏅 Achievements',
                    '❓ Help & Tutorial',
                    '🚪 Exit'
                ],
            },
        ]);

        switch (action) {
            case '🎯 Play Challenges':
                const result = await playChallenges(user);
                if (result) {
                    totalScore += result.score;
                    levelsCompleted += result.completed;
                    // Check for achievements
                    displayAchievements({ totalLevels: levelsCompleted, sessionScore: result.score });
                }
                break;
                
            case '📅 Daily Challenge':
                const dailyResult = await playDailyChallenge();
                if (dailyResult.completed) {
                    totalScore += dailyResult.score;
                    console.log(chalk.green(`🎉 Daily challenge completed! Total score: ${totalScore}`));
                }
                break;
                
            case '📊 View Stats':
                await showStats(user, totalScore, levelsCompleted);
                break;
                
            case '🏆 Leaderboard':
                await displayLeaderboard();
                break;
                
            case '🏅 Achievements':
                showAllAchievements();
                break;
                
            case '❓ Help & Tutorial':
                await showHelp();
                break;
                
            case '🚪 Exit':
                console.log(chalk.green('\n👋 Thanks for playing! Keep practicing your Git skills!'));
                playing = false;
                break;
        }
    }
}

async function playChallenges(user?: { username: string }) {
    console.log(chalk.blue('\n🎯 Choose your challenge category:'));
    
    const { category } = await inquirer.prompt([
        {
            type: 'list',
            name: 'category',
            message: 'Select difficulty:',
            choices: [
                { name: '🌱 Beginner - Basic Git commands', value: 'beginner' },
                { name: '⚡ Intermediate - Branching & merging', value: 'intermediate' },
                { name: '🚀 Advanced - Complex workflows', value: 'advanced' }
            ],
        },
    ]);

    const levels = await FilterLevelsbyCategory(category);
    
    if (!levels || levels.length === 0) {
        console.log(chalk.yellow('No challenges available for this category yet.'));
        return null;
    }

    let score = 0;
    let completed = 0;

    for (const level of levels) {
        console.log(chalk.cyan(`\n📝 Challenge: ${level.name}`));
        console.log(chalk.white(level.description));
        
        const { attempt } = await inquirer.prompt([
            {
                type: 'input',
                name: 'attempt',
                message: 'Enter your Git command:',
                prefix: '$'
            }
        ]);

        if (attempt.trim().toLowerCase() === level.solution.toLowerCase()) {
            console.log(chalk.green('✅ Correct! Well done!'));
            score += 10;
            completed++;
            
            // Show explanation
            console.log(chalk.blue(`💡 Explanation: ${level.task}`));
        } else {
            console.log(chalk.red('❌ Incorrect. Try again!'));
            console.log(chalk.yellow(`💡 Hint: ${level.task}`));
            
            // Give second chance
            const { retry } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'retry',
                    message: 'Try again:',
                    prefix: '$'
                }
            ]);
            
            if (retry.trim().toLowerCase() === level.solution.toLowerCase()) {
                console.log(chalk.green('✅ Correct on second try!'));
                score += 5;
                completed++;
            } else {
                console.log(chalk.red(`❌ The correct answer was: ${chalk.bold(level.solution)}`));
            }
        }
    }

    console.log(chalk.green(`\n🎉 Challenge completed! Score: ${score}, Levels: ${completed}`));
    
    // Update user progress if logged in
    if (user) {
        await UpdateUserProgress(user.username, category, completed, score);
    }

    return { score, completed };
}

async function showStats(user?: { username: string }, totalScore: number, levelsCompleted: number) {
    console.log(chalk.cyan('\n📊 Your Progress:'));
    console.log(chalk.white(`Total Score: ${totalScore}`));
    console.log(chalk.white(`Levels Completed: ${levelsCompleted}`));
    
    if (user) {
        console.log(chalk.white(`Username: ${user.username}`));
        // TODO: Load and display detailed stats from user profile
    }
}



async function showHelp() {
    console.log(chalk.cyan('\n❓ Git Challenge Help:'));
    console.log(chalk.white(`
🎯 How to play:
- Choose a difficulty level
- Read the challenge description
- Enter the correct Git command
- Learn from explanations and hints

📚 Common Git commands:
- git init - Initialize a repository
- git add . - Stage all files
- git commit -m "message" - Commit changes
- git status - Check repository status
- git log - View commit history
- git branch - List branches
- git checkout - Switch branches
- git merge - Merge branches

💡 Tips:
- Commands are case-insensitive
- Pay attention to spaces and special characters
- Use hints when stuck
- Practice regularly to improve!
    `));
}
