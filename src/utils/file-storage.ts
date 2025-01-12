import { error } from "console"
import fs from "fs/promises"
import path from "path"
import inquirer from "inquirer"
import { levelCategory, levelType, user } from "../index-types"
import { User } from "../models/user"

const USER_FILE = path.resolve('data', 'users.json')
 export const LEVEL_FILE = path.resolve('data', 'levels.json')


export async function LoadUsers(): Promise<any>{
    try {
        let data = await fs.readFile(USER_FILE, 'utf-8')
        console.log("data here", data.length)

        if(data.length == 0){
            const newdata = {users:[]}
            return newdata
        }
        return JSON.parse(data) || {users:[]}
        
    } catch (error:any) {

        if (error.code === 'ENOENT'){
            await fs.writeFile(USER_FILE, JSON.stringify({users:[]}))
            // console.log('users in')
            return {users:[]}
        }

        console.log("error: ",error.message);
        throw error 
        
    }
    

}

export async function SaveUsers(users:[user]): Promise<void>{

    try {

        await fs.writeFile(USER_FILE,JSON.stringify({"users":[...users]}), null)
        
    } catch (error) {
        console.error(error)

        
    }

}


export async function DeleteUser(): Promise<void>{
    try {

        const {email} = await inquirer.prompt([
            {type:"input", name:"email", message:"enter the email associated to your account: "}    
        ])

        const {continueToDelete} = await inquirer.prompt([
            {
                type:"list",
                name:"continueToDelete",
                message:"Do you want to continue. This action is irreversible and your data will be lost...",
                choices:["Yes", "No"]
            }
        ])

        if (continueToDelete === "No"){
            setImmediate(()=> {
                console.log("Aborting.....")
            })
            return
        }
    
       const users = await LoadUsers()
        const userdata:[] = users['users']
        // console.log("users laoded", userdata)

        if (users.length === 0){
            throw error('no user available') 
        }
   
       const currentuser =  userdata.find((user:any) => user.email === email)

    //    console.log("currentuser", currentuser);
       
        if (currentuser === undefined){
            console.error('sorry user not found in storage')
            return
    
        }

       const removeUser= userdata.filter((user:any) => user.email != email)

        await SaveUsers(removeUser) 
        
        console.log("Account deleted successfully.")
    } catch (error:any) {

        console.log("error:",error.message)
    }

}


export async function GetUserbyId():Promise<any>{
    try {

        const {email} = await inquirer.prompt([
            {type:"input", name:"email", message:"enter the email associated to your account: "}    
        ])

        if(email=== ''){
            console.error('invalide email')
            return 
        }

       const users = await LoadUsers()
        const userdata:[] = users['users']

        if (users.length === 0){
            throw error('no user available') 
        }
   
       const currentuser =  userdata.find((user:any) => user.email === email)

    //    console.log("currentuser", currentuser);
       
        if (currentuser === undefined){
            console.error('sorry user not found in storage')
            return
    
        }

        return currentuser

    } catch (error:any) {

        console.error(error)
        return
    }
}


export async function Updateuser(email:string, data:{username:string, password:string}){
    try {
        const users = await LoadUsers()

        if(users.length === 0){
            console.error("No user found in storage")
            return
        }

        const userData:[user] = users['users']

        const currentUser = userData.find((user:user) => user.email === email)

        if(!currentUser){
            console.error(`No user with email ${email} found in storage`)
            return
        }

        const userIndex = userData.findIndex((user:any) => user.email === email)

        // console.log('current user index here', userIndex)

        const currentdata = userData[userIndex]

     userData[userIndex] = {
        ...currentdata,
         ...data
     }

  await SaveUsers(userData)

  console.log("User updated successfully")

    } catch (error:any) {
        console.error(error.message);
        return
        
        
    }
}


export async function create(){
    try {

        const users = await fs.readFile(USER_FILE,'utf-8')

        const userdata = JSON.parse(users) || []
       

        const allsusers:[{}] = userdata['users']

        const newuser = {
            username:"dgfgd",
            email:"ddfgdfg",
            password:2334
        }

        allsusers.push(newuser)


        await fs.writeFile(USER_FILE, JSON.stringify({users:[...allsusers]}))





        
    } catch (error) {
        
    }
}