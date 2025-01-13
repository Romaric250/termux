import { main } from "./src/cli";
import { levelCategory, user } from "./src/index-types";
import { levelType } from "./src/index-types";
import inquirer from "inquirer";
import { FilterLevelsbyCategory, ParseLeveltoUser } from "./src/services/manage-levels";
import { login } from "./src/services/manage-users";



const UpdateCurrentUserLevel = async() => {

    
}

export async function StartPlayingGame(user?:user){

    // console.log(levelCategory[0])

    const {gameOptions} = await inquirer.prompt([
        {
            type:"list",
            name:"gameOptions",
            choices:[`${levelCategory[0]}`, `${levelCategory[1]}`, `${levelCategory[2]}`],
            message:"Select Level category"
        }
    ])


    if (gameOptions === levelCategory[0]){

        const getCatdata = await FilterLevelsbyCategory(levelCategory[0])


        getCatdata.map((level:any) => {
            
        })
        // console.log("data in bd", getCatdata);
    }
    if (gameOptions === levelCategory[1]){
        const getCatdata = await FilterLevelsbyCategory(levelCategory[1])

        // getCatdata.map((level:any) => {
        //     console.log("level data it",level.task,level.name);
        // })

        await ParseLeveltoUser(getCatdata, user)
        // console.log('data ', getCatdata);
    }
    if (gameOptions === levelCategory[2]){

        const getCatdata = await FilterLevelsbyCategory(levelCategory[2])

        getCatdata.map((level:any) => {
            console.log("level data ad",level.task,level.name);
        })
        console.log("data in ad", getCatdata);    
    }
}



async function PlayBeginnerLevel(){
    
}




// export async function PlayLevel(level_Type:levelType, level:number, user:user){
//     try {

//         if(!user){
//             console.error('unauthorized, how did you find yourself here')
//             main()
//             return
//         }

//         if (level_Type === levelType.beginner){





//         }
//         if (level_Type === levelType.intermediate){





//         }
//         if (level_Type === levelType.advanced){


//         }

        


//     } catch (error:any) {
//         return 'error'
        
//     }
// }