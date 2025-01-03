
export class User {
    constructor(public username:string, public email:string, private password:string){
        this.username = username
        this.email = email
        this.password = password
    }
}
