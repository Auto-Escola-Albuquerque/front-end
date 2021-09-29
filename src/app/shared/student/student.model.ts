export class Student {
    id: string;
    seqNo: number;
    name: string;
    isPractical: boolean;
    cpf: string;
    city: number;
    registrationDate: string;
    gender: boolean;
    email: string;
    phone: string;
    dayClasses: number;
    nightClasses: number;
    theoreticalFines: number;
    practicalFines: number;
    defensiveDriving: number;
    legislation: number;
    mechanics: number;
    environment: number;
    firstAid: number;
    check1: boolean;
    check2: boolean;
    check3: boolean;

    constructor() {
        this.theoreticalFines = 0;
        this.practicalFines = 0;
        this.dayClasses = 0;
        this.nightClasses = 0;
        this.defensiveDriving = 0;
        this.legislation = 0;
        this.mechanics = 0;
        this.firstAid = 0;
        this.isPractical = false;
    }
}
