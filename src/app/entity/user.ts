export class User {
    name: string;
    email: string;
    
    constructor(userObj: any) {
        this.name = userObj.name;
        this.email = userObj.email;
    }
}
