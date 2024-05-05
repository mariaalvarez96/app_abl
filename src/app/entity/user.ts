export class User {
    name: string;
    email: string;
    phone: number;
    password: string;
    dni: string;
    avatar: ArrayBuffer;
    
    constructor(userObj: any) {
        this.name = userObj.name;
        this.email = userObj.email;
        this.phone = userObj.phone;
        this.password = userObj.password;
        this.dni = userObj.dni;
        this.avatar = userObj.avatar;
    }
}
