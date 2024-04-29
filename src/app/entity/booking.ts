export class Booking {
    idBooking: string;
    idUser: string;
    idClass: string;
    studentName: string;

    constructor(bookingObj: any) {
        this.idBooking = bookingObj.id_booking;
        this.idUser = bookingObj.id_user;
        this.idClass = bookingObj.id_class;
        this.studentName = bookingObj.student_name;
    }
}