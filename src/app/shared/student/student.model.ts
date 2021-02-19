export class Student {
    name: string;
    cpf: number;
    registrationDate: Date;
    dayClasses: Number;
    nigthClasses: Number;
    mat1: number;
    mat2: number;
    mat3: number;
    mat4: number;
    mat5: number;
    theoreticalFines: number;
    practicalFines: number;

    constructor() {
        this.theoreticalFines = 0;
        this.practicalFines = 0;
    }
}
