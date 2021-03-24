export class Student {
    seqNo: number;
    name: string;
    cpf: string;
    registrationDate: Date;
    gender: boolean;
    dayClasses: Number;
    nigthClasses: Number;
    subjects: Number[];
    theoreticalFines: number;
    practicalFines: number;

    constructor() {
        this.theoreticalFines = 0;
        this.practicalFines = 0;
        this.dayClasses = 0;
        this.nigthClasses = 0;
        this.subjects = new Array(5);
        this.subjects.fill(0);
    }
}
