export class Student {
    name: string;
    cpf: number;
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
        this.subjects = new Array(5);
        this.subjects.fill(0);
    }
}
