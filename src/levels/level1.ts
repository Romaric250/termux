import { Level } from "../models/level";


export class Level1 extends Level{
    constructor(public name:string, public description: string){
        super(name,description)
        name = "Level 1 "
        description = "try to find this file"
    }
}