export class User {
    constructor(
        public username: string,
        public email: string,
        private password: string,
        public progress: { level: number; score: number } = { level: 1, score: 0 }
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
