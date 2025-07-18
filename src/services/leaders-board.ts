import { LoadUsers } from '../utils/file-storage';
import chalk from 'chalk';

export interface LeaderboardEntry {
    username: string;
    totalScore: number;
    levelsCompleted: number;
    rank: number;
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
        const userData = await LoadUsers();
        const users = userData['users'];

        const leaderboard: LeaderboardEntry[] = users
            .map((user: any) => ({
                username: user.username,
                totalScore: user.progress.grandTotalScore || 0,
                levelsCompleted: calculateTotalLevels(user.progress),
                rank: 0
            }))
            .filter((entry: LeaderboardEntry) => entry.totalScore > 0)
            .sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.totalScore - a.totalScore);

        // Assign ranks
        leaderboard.forEach((entry, index) => {
            entry.rank = index + 1;
        });

        return leaderboard;
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        return [];
    }
}

function calculateTotalLevels(progress: any): number {
    let total = 0;
    if (progress.beginner) total += progress.beginner.levelsCompleted || 0;
    if (progress.intermediate) total += progress.intermediate.levelsCompleted || 0;
    if (progress.advanced) total += progress.advanced.levelsCompleted || 0;
    return total;
}

export async function displayLeaderboard(): Promise<void> {
    const leaderboard = await getLeaderboard();

    console.log(chalk.cyan.bold('\n🏆 LEADERBOARD'));
    console.log(chalk.yellow('═'.repeat(60)));

    if (leaderboard.length === 0) {
        console.log(chalk.yellow('No players yet. Be the first to complete challenges!'));
        return;
    }

    // Display top 10 players
    const topPlayers = leaderboard.slice(0, 10);
    
    console.log(chalk.white(`${'Rank'.padEnd(6)} ${'Player'.padEnd(20)} ${'Score'.padEnd(10)} ${'Levels'}`));
    console.log(chalk.yellow('─'.repeat(60)));

    topPlayers.forEach((entry, index) => {
        const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
        const rankText = `${rankIcon} ${entry.rank}`.padEnd(6);
        const username = entry.username.padEnd(20);
        const score = entry.totalScore.toString().padEnd(10);
        const levels = entry.levelsCompleted.toString();

        console.log(chalk.white(`${rankText} ${username} ${score} ${levels}`));
    });

    console.log(chalk.yellow('─'.repeat(60)));
    console.log(chalk.cyan(`Total players: ${leaderboard.length}`));
}

export async function getUserRank(username: string): Promise<number> {
    const leaderboard = await getLeaderboard();
    const userEntry = leaderboard.find(entry => entry.username === username);
    return userEntry ? userEntry.rank : -1;
}

export async function displayUserStats(username: string): Promise<void> {
    const leaderboard = await getLeaderboard();
    const userEntry = leaderboard.find(entry => entry.username === username);

    if (!userEntry) {
        console.log(chalk.yellow('No stats found for this user.'));
        return;
    }

    console.log(chalk.cyan(`\n📊 Stats for ${username}:`));
    console.log(chalk.white(`Rank: #${userEntry.rank}`));
    console.log(chalk.white(`Total Score: ${userEntry.totalScore}`));
    console.log(chalk.white(`Levels Completed: ${userEntry.levelsCompleted}`));
}

