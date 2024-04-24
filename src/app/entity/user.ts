export class User {
    name: string;
    email: string;
    phone: number;
    password: string;
    dni: string;
    
    constructor(userObj: any) {
        this.name = userObj.name;
        this.email = userObj.email;
        this.phone = userObj.phone;
        this.password = userObj.password;
        this.dni = userObj.dni;
    }
}
