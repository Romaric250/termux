import { register,login, UpdateUser } from './services/manage-users';
import { startGame } from './core/engine';
import inquirer from 'inquirer';
import { DeleteUser } from './utils/file-storage';
import { user } from './index-types';
import { CreateLevel } from './services/manage-levels';
import { StartPlayingGame } from '../index-fxns';
export async function main() {
    console.log('Welcome to Termux');
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Register', 'Login', 'Play as Guest', 'Exit', 'delete-user','update-user'],
        },
    ]);

    if (action === 'Register') {

        const {register_options} = await inquirer.prompt([{
            
                type:'list',
                name:'register_options',
                message:'What would you like to use',
                choices:['File-storage', 'Database storage'],
            
        }])


        if (register_options === 'File-storage'){
await register();
main()
        }else{
            
            console.log('Coming soon....')
            main()
        }

    } else if (action === 'Login') {
        const user = await login();
        if (user) {
            console.log(`Welcome back, ${user.username}!`);
            await startGame(user);
        }
    } else if (action === 'Play as Guest') {
        // console.log('Starting the game as a guest...');
        // await startGame(); 

        await StartPlayingGame()
    
    } else if (action === 'delete-user'){
        await DeleteUser()
        main()

    }
    else if (action === 'update-user'){
        await UpdateUser()
        main()

    }

    else {
        console.log('Goodbye!');
        process.exit(0);
    }
}

main().catch((err) => console.error('An error occurred:', err));
