import {Subjects} from '../subjects/subjects.model';

export class Student {
    id: string;
    seqNo: number;
    name: string;
    cpf: string;
    registrationDate: string;
    gender: boolean;
    email: string;
    phone: string;
    dayClasses: number;
    nightClasses: number;
    theoreticalFines: number;
    practicalFines: number;
    subjects: any;
    check1: boolean;
    check2: boolean;
    check3: boolean;

    constructor() {
        this.theoreticalFines = 0;
        this.practicalFines = 0;
        this.dayClasses = 0;
        this.nightClasses = 0;
        this.subjects = new Subjects();
    }
}
