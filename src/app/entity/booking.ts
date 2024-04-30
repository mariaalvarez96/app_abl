import { Lesson } from "./lesson";

export class Booking {
    id: string;
    idUser: string;
    studentName: string;
    lesson: Lesson;

    constructor(bookingObj: any) {
        this.id = bookingObj.id;
        this.idUser = bookingObj.userId;
        this.studentName = bookingObj.studentName;
        this.lesson = new Lesson(bookingObj.lesson);
    }
}