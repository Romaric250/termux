import inquirer from 'inquirer';

export async function startGame(user?: { username: string }) {
    console.log(`Hello ${user ? user.username : 'Adventurer'}, let's start the game!`);

    let playing = true;

    while (playing) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose your next move:',
                choices: ['Solve Puzzle', 'View Stats', 'Exit'],
            },
        ]);

        if (action === 'Solve Puzzle') {
            console.log('Puzzle-solving logic goes here...');
            
        } else if (action === 'View Stats') {
            console.log('Display player stats (e.g., levels completed, achievements).');
            
        } else if (action === 'Exit') {
            console.log('Thanks for playing!');
            playing = false;
        }
    }
}
