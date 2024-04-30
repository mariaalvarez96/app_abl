export class Lesson {
    id: string;
    name: string;
    day: string;
    time: string;

    constructor(classObj: any) {
        this.id = classObj.id;
        this.name = classObj.name;
        this.day = classObj.day;
        this.time = classObj.time;
    }
}