import { Lesson } from './lesson';
import { Student } from './student';

export class Booking {
  id: string;
  idUser: string;
  student: Student;
  lesson: Lesson;
  date: string;
  time: string;

  constructor(bookingObj: any) {
    this.id = bookingObj?.id;
    this.idUser = bookingObj.userId;
    this.student = new Student(bookingObj.student);
    this.lesson = new Lesson(bookingObj.lesson);
    this.date = bookingObj.date;
    this.time = bookingObj.time;
  }
}
