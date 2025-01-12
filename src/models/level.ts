import { levelCategory } from "../index-types";

export class Level{
    constructor(public name:string, public description:string, public category:levelCategory, public task:string, protected solution:string){
        this.name = name;
        this.description = description;
        this.category = category;
        this.solution = solution

    }
    start(): void{
        console.log("something cooking up", this.name)
        
    }
    ToJSON(){
        return {
            name:this.name,
            description: this.description,
            category:this.category,
            solution:this.solution
        }
    }
}