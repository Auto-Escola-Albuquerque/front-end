import { Injectable } from '@angular/core';
import { Student } from './student/student.model';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee/employee.model';

@Injectable({
    providedIn: 'root'
})
export class AutoescolaService {
    url: any;

    constructor(private authHttp: HttpClient) {
        this.url = 'localhost:3500';
    }

    getStudent(id: number) {
        return this.authHttp.get(`${this.url}/student/${id}/`);
    }

    getStudentList() {
        let students: any;
        students = this.authHttp.get(`${this.url}/student/list/`);
        return students;
    }

    getEmployee(id: number) {
        return this.authHttp.get(`${this.url}/user/${id}/`);
    }

    getEmployeeList() {
        let employees: any;
        employees = this.authHttp.get(`${this.url}/user/list/`);
        return employees;
    }

    postStudent(student: Student) {
        return this.authHttp.post(`${this.url}/student/`, student);
    }

    postEmployee(employee: Employee) {
        return this.authHttp.post(`${this.url}/user/`, employee);
    }

    putStudent(student: Student) {
        return this.authHttp.put(`${this.url}/student/`, student);
    }

    putEmployee(employee: Employee) {
        return this.authHttp.put(`${this.url}/user/`, employee);
    }

    deleteStudent(id: string) {
        const headers = { 'id': id }

        return this.authHttp.delete(`${this.url}/student/`, { headers })
            .subscribe(() => status = "Delete Successful");
    }

    deleteEmployee(id: string) {
        const headers = { 'id': id }

        return this.authHttp.delete(`${this.url}/user/`, { headers })
            .subscribe(() => status = "Delete Successful");
    }
}
