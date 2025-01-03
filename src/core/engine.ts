import { Level } from "../models/level";

export class GameEngine{
    private levels:Level[] = []
    private currentlevelindex = 0

    constructor(levels:Level[]){
        this.levels = levels
    }

    public startGame(): void {
        console.log("welcome to terminal dimenstion explorer");
        this.playlevel()
        
    }

    public playlevel():void {
        const currentlevel = this.levels[this.currentlevelindex]
        currentlevel.start()
    }

}