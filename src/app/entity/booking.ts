export class Booking {
    idBooking: string;
    idClass: string;
    idUser: number;
    studentName: string;
    
    constructor(bookingObj: any) {
        this.idBooking = bookingObj.idBooking;
        this.idClass = bookingObj.idClass;
        this.idUser = bookingObj.idUser;
        this.studentName = bookingObj.studentName;
    }
}