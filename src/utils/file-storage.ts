import { error } from "console"
import fs from "fs/promises"
import path from "path"
import { User } from "../models/user"

const USER_FILE = path.resolve('data', 'users.json')

export async function LoadUsers(): Promise<any>{

    try {
        const data = await fs.readFile(USER_FILE, 'utf-8')
        console.log("data here", data)
        return JSON.parse(data) || []
        
    } catch (error:any) {

        if (error.code === 'ENOENT'){
            await fs.writeFile(USER_FILE, JSON.stringify({users:[]}))
            console.log('users in')
            return []
        }

        console.log("error: ",error.message);
        throw error 
        
    }
    

}

export async function SaveUsers(users:User): Promise<void>{

    try {

        await fs.writeFile(USER_FILE,JSON.stringify({users}), null)
        
    } catch (error) {
        console.error(error)

        
    }

}


// export async function DeleteUser(userId:string): Promise<void>{
//     try {

//         if (!userId || userId.length !>= 12 ){

//             throw error("No user id or invalide userID")
//         }
    
//         let users = await fs.readFile('users-file.json','utf-8');
        
//         users = JSON.parse(users) || []
//         const userdata = [...users]

//         if (users.length === 0){
//             throw error('no user available')
//         }

//         let isuserpresent = userdata.find((usr)=> usr == userId)

//         if (isuserpresent === undefined){
//             throw error('sorry user not found in storage')
//         }

//         const removeUser = userdata.filter((user) => user != userId)

//         await SaveUsers(removeUser)        
//     } catch (error:any) {

//         console.log(error.message)
//     }

// }
