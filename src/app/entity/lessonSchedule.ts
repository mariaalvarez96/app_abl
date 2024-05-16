export class LessonSchedule {
  id: string;
  day: number;
  time: string;

  constructor(classObj: any) {
    this.id = classObj.id;
    this.day = classObj.day;
    this.time = classObj.time;
  }
}
