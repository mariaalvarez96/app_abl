import { User } from "./user";

export class Student {
    id: string;
	name: string;
	level: string;
    user: User;
    dni: string;

    constructor(studentObj: any) {
        this.id = studentObj.id;
        this.name = studentObj.name;
        this.level = studentObj.level;
        this.user = new User(studentObj.user);
        this.dni = studentObj.dni;
    }
}