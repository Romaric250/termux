import { register,login } from './services/manage-users';
import { startGame } from './core/engine';
import inquirer from 'inquirer';

async function main() {
    console.log('Welcome to Terminal Dimension Explorer!');
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Register', 'Login', 'Play as Guest', 'Exit'],
        },
    ]);

    if (action === 'Register') {
        await register();
        
    } else if (action === 'Login') {
        const user = await login();
        if (user) {
            console.log(`Welcome back, ${user.username}!`);
            await startGame(user);
        }
    } else if (action === 'Play as Guest') {
        console.log('Starting the game as a guest...');
        await startGame(); 
    } else {
        console.log('Goodbye!');
        process.exit(0);
    }
}

main().catch((err) => console.error('An error occurred:', err));
