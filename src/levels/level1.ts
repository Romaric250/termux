import { levelCategory } from "../index-types";
import { Level } from "../models/level";

export class LevelInstance extends Level{
    constructor(public name:string, public description: string, category:levelCategory,solution:string, task:string, public level:number){
        super(name,description,category,task, solution)
        name = "Level 1"
        description = "try to find this file example.tsz"
        category = levelCategory.beginner
        this.level = level
    }

    startlevel(): void{

        
        
    }

}