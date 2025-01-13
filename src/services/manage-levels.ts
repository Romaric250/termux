import inquirer from "inquirer";
import { GetUserbyId, LEVEL_FILE } from "../utils/file-storage";
import { levelCategory, levelType } from "../index-types";
import { Level } from "../models/level";
import fs from 'fs/promises'
import { main } from "../cli";

 
export async function CreateLevel(){

    const currentuser = await GetUserbyId()

    if (!currentuser){
        console.error('invalid user credentials')
        main()
    }

    const {name,description,task,category,solution}= await inquirer.prompt([
        {type:"input",name:"name",message:"enter name"},
        {type:"input",name:'description',message:'give suitable description'},
        {type:'input',name:"task",message:'enter task'},
        {type:'input',name:'solution',message:'fill out the solution'},
        {type:'input',name:'category',message:'enter category -> beginner | intermediate | advanced'}
    ])

    let level = await LoadLevels()


    const newLevel= new Level(
      name,
      description,
      task,
      category,
      solution
    )

    const setLevel=level['levels']
    level =[...setLevel,newLevel]

    await SaveLevels(level)
}



export async  function SaveLevels(levels:[Level]):Promise<void>{
 
    try {
        await fs.writeFile(LEVEL_FILE,JSON.stringify({"levels":[...levels]}))
    } catch (error) {
        console.error(error)
    }
}



// export async function UpdateLevel(){
 
//     try {
//        const {name,description,task,category,solution}
//     } catch (error) {
        
//     }
// }



export async function LoadLevels():Promise<any>{
    try {

        const levels = await fs.readFile(LEVEL_FILE,'utf-8')
        if (levels.length === 0){
            console.error("Sorry, no levels found in storage.")
            return 
        }

        return JSON.parse(levels) || {levels:[]}
        
    } catch (error:any) {
        if(error.code === 'ENOENT'){
            await fs.writeFile(LEVEL_FILE,JSON.stringify({levels:[]}))
        }
        return {levels:[]}

    
        
    }
}


export async function FilterLevelsbyCategory(category:string){
    try {
        console.log('inside the function', category)
        const levels = await LoadLevels()

        const levelsdata = levels['levels']
        console.log("level dta", levelsdata);
        

        const filterlevels = await levelsdata.filter((level:levelType) => 
            level.category == category
        )


        console.log('filtered levels', filterlevels);
        

        if (filterlevels.length === 0){
            return []
        }

        return filterlevels
        
    } catch (error:any) {
        console.error(error.message)
        return []   
    }
}


export async function ParseLeveltoUser(levelData:any): Promise<void>{

    try {
        const {levels}= await inquirer.prompt([
               { type:'list',
                name:'levels',
                message:'What would you like to use',
                choices:[...levelData.map((level:any) =>level.name)],}
        
            ])        
    } catch (error:any) {
        

    }

}