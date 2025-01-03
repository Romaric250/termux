
export abstract class User {
    abstract username:string;
    abstract email: string;
    abstract password: string

    public abstract Login(): void 
}
