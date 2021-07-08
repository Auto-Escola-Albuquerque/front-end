import {Student} from '../student/student.model';

export class Trafficticket {
    id: number;
    student: Student;
    count: number;
    date: string;
    type: boolean;
    constructor() {
      this.student = new Student();
    }
}
