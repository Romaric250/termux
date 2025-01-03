import { User } from '../models/user';
import { LoadUsers, SaveUsers} from '../utils/file-storage'; // Adjust relative paths if needed.


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function register() {
    const username = await askQuestion('Enter username: ');
    const email = await askQuestion('Enter email: ');
    const password = await askQuestion('Enter password: ');

    const users = await LoadUsers();

    if (users.find((u) => u.username === username)) {
        console.log('Username already exists!');
        return;
    }

    const newUser = new User(username, email, password);
    users.push(newUser.toJSON());
    await SaveUsers(users);

    console.log('Registration successful!');
}

async function login() {
    const username = await askQuestion('Enter username: ');
    const password = await askQuestion('Enter password: ');

    const users = await LoadUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        console.log('Invalid credentials!');
        return;
    }

    console.log(`Welcome back, ${username}!`);
    return user;
}

async function mainMenu() {
    console.log('1. Register');
    console.log('2. Login');
    console.log('3. Exit');

    const choice = await askQuestion('Choose an option: ');

    if (choice === '1') {
        await register();
    } else if (choice === '2') {
        const user = await login();
        if (user) {
            console.log('Start your adventure!');
            // Launch the game
        }
    } else {
        console.log('Goodbye!');
        rl.close();
    }

    await mainMenu(); // Loop back to the menu
}

mainMenu();
