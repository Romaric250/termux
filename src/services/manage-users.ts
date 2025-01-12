import { LoadUsers, SaveUsers, Updateuser } from '../utils/file-storage';
import { User } from '../models/user';
import inquirer from 'inquirer';
import { user } from '../index-types';

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

    

    const newUser = new User(username, email, password,{
        beginner:{
            levelsCompleted:0,
            totalScore:0
        },
        intermediate:{
            levelsCompleted:0,
            totalScore:0
        },
        advanced:{
            levelsCompleted:0,
            totalScore:0
        },
    },
0
);

    const userdata = users['users']
    users = [...userdata,newUser]
    
    console.log("new updates", users)
    // console.log("user here", updatedData)


    await SaveUsers(users)

    console.log('Registration successful! You can now log in.');
}



export async function UpdateUser(){
    try {
        const {email, username, password} = await inquirer.prompt([
            {type:'input', name:'email', message:"Enter the email associated to your account: "},
            {type:'input', name:'username', message:"New Username: "},
            {type:'password', name:'password', message:"New Password: "}
            
        ])

        await Updateuser(email,{username:username,password:password})

        return "success"
        
    } catch (error:any) {
        console.log(error)
        return "error"

    }
}

export async function login() {
    const { username, password } = await inquirer.prompt([
        { type: 'input', name: 'username', message: 'Enter your username:' },
        { type: 'password', name: 'password', message: 'Enter your password:' },
    ]);

    const userData = await LoadUsers();
    const users:[{}] = userData['users']

    console.log('users', users)
    const user = users.find((u:any) => u.username === username && u.password === password);

    if (!user) {
        console.log('Invalid username or password. Please try again.');
        return null;
    }

    return user;
}


