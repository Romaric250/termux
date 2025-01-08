import { error, log } from "console"
import fs from "fs/promises"
import path from "path"
import { User } from "../models/user"
import { errorMonitor } from "stream"

const USER_FILE = path.resolve('data', 'users.json')

export async function LoadUsers(): Promise<any>{
    try {
        const data = await fs.readFile(USER_FILE, 'utf-8')
        // console.log("data here", data)
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

export async function SaveUsers(users:any): Promise<void>{

    try {

        await fs.writeFile(USER_FILE,JSON.stringify({"users":[...users]}), null)
        
    } catch (error) {
        console.error(error)

        
    }

}


export async function DeleteUser(email:string): Promise<void>{
    try {

        // if (!email || email.length !>= 12 ){

        //     throw error("No user id or invalide email")
        // }
    
       const users = await LoadUsers()
        const userdata:[] = users['users']
        console.log("users laoded", userdata)

        if (users.length === 0){
            throw error('no user available') 
        }

       
       const currentuser =  userdata.find((user:any) => user.email === email)

       console.log("currentuser", currentuser);
       

        if (currentuser === undefined){
            throw error('sorry user not found in storage')
        }

       const removeUser = userdata.filter((user:any) => user.email != email)

       console.log("removed user", removeUser)
        await SaveUsers(removeUser)        
    } catch (error:any) {

        console.log("error:",error.message)
    }

}


export async function UpdateUser(email:string, data:User){
    try {
        const users = await LoadUsers()

        if(users.length === 0){
            throw error("No user found in storage")
        }

        const userData:[{}] = users['users']

        const currentUser = userData.find((user:any) => user.email === email)

        if(!currentUser){
            throw error(`No user with email ${email} found in storage`)
        }

        const userIndex = userData.findIndex((user:any) => user.email === email)

        console.log('current user index here', userIndex)

     userData[userIndex] = {
         ...data,
        email:data.email,
        username:data.username,
     }

  await SaveUsers(userData)

  console.log("User updated successfully")





        










        
    } catch (error:any) {
        console.log(error.message);
        throw error(error)
        
        
    }
}