import fs from "fs/promises"
import path from "path"

const USER_FILE = path.resolve('data', 'users.json')

export async function LoadUsers(): Promise<any>{

    try {
        const data = await fs.readFile('users.json', 'utf-8')
        return JSON.parse(data) || []
        
    } catch (error:any) {

        if (error.code === 'ENOENT'){
            await fs.writeFile(USER_FILE, JSON.stringify({users:[]}))
            return []
        }

        console.log(error.message);
        throw error 
        
    }
    

}

