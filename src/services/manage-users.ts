import { LoadUsers, SaveUsers } from '../utils/file-storage';
import { User } from '../models/user';
import inquirer from 'inquirer';

export async function register() {
    const { username, email, password } = await inquirer.prompt([
        { type: 'input', name: 'username', message: 'Enter your username:' },
        { type: 'input', name: 'email', message: 'Enter your email:' },
        { type: 'password', name: 'password', message: 'Enter your password:' },
    ]);

    let users = await LoadUsers();

    // if (users.some((u) => u.username === username)) {
    //     console.log('Username already exists! Please try another.');
    //     return;
    // }

    const newUser = new User(username, email, password);

    console.log("new user", users)



    console.log('Registration successful! You can now log in.');
}

export async function login() {
    const { username, password } = await inquirer.prompt([
        { type: 'input', name: 'username', message: 'Enter your username:' },
        { type: 'password', name: 'password', message: 'Enter your password:' },
    ]);

    const users = await LoadUsers();

    console.log('users', users)
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        console.log('Invalid username or password. Please try again.');
        return null;
    }

    return user;
}
