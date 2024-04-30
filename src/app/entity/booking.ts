export class Booking {
    idBooking: string;
<<<<<<< HEAD
    idClass: string;
    idUser: number;
    studentName: string;
    
    constructor(bookingObj: any) {
        this.idBooking = bookingObj.idBooking;
        this.idClass = bookingObj.idClass;
        this.idUser = bookingObj.idUser;
        this.studentName = bookingObj.studentName;
=======
    idUser: string;
    idClass: string;
    studentName: string;

    constructor(bookingObj: any) {
        this.idBooking = bookingObj.id_booking;
        this.idUser = bookingObj.id_user;
        this.idClass = bookingObj.id_class;
        this.studentName = bookingObj.student_name;
>>>>>>> 792fcfc42645651273ed1b35b084100b5a9007d7
    }
}