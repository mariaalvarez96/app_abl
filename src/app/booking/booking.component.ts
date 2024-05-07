import { Component } from '@angular/core';
import { User } from '../entity/user';
import { CurrentUserManager } from '../services/currentUserManager';
import { ApiService } from '../services/api';
import { Lesson } from '../entity/lesson';
import { DatetimeChangeEventDetail } from '@ionic/angular';
import { IonDatetimeCustomEvent } from '@ionic/core';
import { Student } from '../entity/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {

  user: User|null = null;
  lessons: Lesson[] = [];
  students: Student[] = [];
  dates: string[] = [];
  lessonSelected: Lesson|null = null;
  daySelected: any;
  selectedTime: string = '';
  hours: string[] = [];
  studentSelected: any;
  timeSelected: any;

  constructor(
    private currentUserManager: CurrentUserManager,
    private api: ApiService,
    private router: Router
  ) {
    this.user = this.currentUserManager.getCurrentUser();
    this.api.getAllLessons().subscribe(
      (response: any) => {
        this.lessons = response.map((lesson: any) => new Lesson(lesson));
      }
    )
    this.dayValues();
    this.api.getAllStudents(this.user?.dni).subscribe(
      (response: any) => {
        this.students = response.map((student: any) => new Student(student));
      }
    )
  }

  minDate() {
    let date = new Date();
    date.setHours(4,0,0,0);
    return date.toISOString().slice(0, 19);
  }

  maxDate() {
    let date = new Date();
    date.setSeconds(date.getSeconds() + 2419200);
    return date.toISOString().slice(0, 19);
  }

  dayValues() {
    let maxDays = 28;
    let now = new Date(); 
    let res = [];
    for (let i = 0;maxDays > i; i++) {
      if (this.lessonSelected?.getDays().includes(now.getDay())) {
        res.push(now.getDate());
      }
      now.setDate(now.getDate() + 1);
    }

    return res;
  }

  dateTimeUpdated(event: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
    let dateString = event.detail.value + "";
    let date = new Date(dateString);
    if (this.lessonSelected && this.lessonSelected.getTimesByDay(date.getDay())) {
      this.hours = this.lessonSelected.getTimesByDay(date.getDay());
    }
  }

  saveBooking() {
    let booking = {
      user: {dni: this.user?.dni},
      lesson: {id: this.lessonSelected?.id},
      date: (new Date(this.daySelected)).toISOString().slice(0, 10),
      time: this.timeSelected,
      student: {id: this.studentSelected?.id}
    };
    this.api.saveBooking(booking).subscribe(
      (response: any) => {
        this.router.navigate(['/tabs/mybookings']);
      }
    );
  }
    
}
