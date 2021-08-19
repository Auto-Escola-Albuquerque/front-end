import {Student} from '../student/student.model';

export class Trafficticket {
    id: number;
    student: Student;
    count: number;
    date: string;
    type: string;
    constructor() {
      this.student = new Student();
    }
}
