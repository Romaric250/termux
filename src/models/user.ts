import { user } from "../index-types";
export class User {
    constructor(
        public username: string,
        public email: string,
        private password: string,
        // public progress: { level: number; score: number } = { level: 1, score: 0 },
        private progress: {
            beginner:{
                levelsCompleted:number,
                totalScore:number
            }
            
            intermediate:{
                levelsCompleted:number,
                totalScore:number,
            },
            advanced:{
                levelsCompleted:number,
                totalScore:number
            }
        },
        grandTotal:number

    ) {}

    toJSON() {
        return {
            username: this.username,
            email: this.email,
            password: this.password,
            progress: this.progress,
        };
    }
}
