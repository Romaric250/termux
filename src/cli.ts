import { register,login } from './services/manage-users';
import { startGame } from './core/engine';
import inquirer from 'inquirer';
import { DeleteUser, UpdateUser } from './utils/file-storage';

async function main() {
    console.log('Welcome to Termux');
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Register', 'Login', 'Play as Guest', 'Exit', 'delete-user'],
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
        }else{
            
            console.log('Coming soon....')
            process.exit(0)
        }




    } else if (action === 'Login') {
        const user = await login();
        if (user) {
            console.log(`Welcome back, ${user.username}!`);
            await startGame(user);
        }
    } else if (action === 'Play as Guest') {
        console.log('Starting the game as a guest...');
        await startGame(); 
    } else if (action === 'delete-user'){
        // await DeleteUser("romaric")
        // await UpdateUser("romaric", {"username":"dg","email":"fgdfg","password":"ddfg","progress":{"level":1,"score":0})
    }


    
    
    
    else {
        console.log('Goodbye!');
        process.exit(0);
    }
}

main().catch((err) => console.error('An error occurred:', err));
