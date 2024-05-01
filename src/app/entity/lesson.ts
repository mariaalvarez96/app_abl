import { LessonSchedule } from "./lessonSchedule";

export class Lesson {
    id: string;
    name: string;
    schedules: LessonSchedule[] = [];

    constructor(classObj: any) {
        this.id = classObj.id;
        this.name = classObj.name;
        this.schedules = classObj.schedules;
    }

    getDays() {
        return this.schedules.reduce((acc: number[], schedule: LessonSchedule) => {
            acc.push(schedule.day);
            return acc;
        }, []);
    }

    getTimesByDay(day: number) {
        return this.schedules.reduce((hours: string[], schedule: LessonSchedule) => {
            if (schedule.day === day) {
                hours.push(schedule.time);
            }
            return hours;
        }, []);
    }

}