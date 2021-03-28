import { Injectable } from '@angular/core';
import { Student } from './student/student.model';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee/employee.model';
import { Class } from './class/class.model';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AutoescolaService {
    private url = 'https://auto-escola-albuquerque.herokuapp.com';;

    constructor(private authHttp: HttpClient) {
        
    }

    getStudent(id: string) {
        return this.authHttp.get(`${this.url}/student/${id}/`);
    }

    getStudentList() {
        let students: any;
        students = this.authHttp.get<Student[]>(`${this.url}/student/list/`);
        return students;
    }

    getEmployee(id: string) {
        return this.authHttp.get(`${this.url}/user/${id}/`);
    }

    getClass(id: string) {
        return this.authHttp.get(`${this.url}/class/${id}/`);
    }

    getEmployeeList() {
        this.authHttp.get(`${this.url}/user/list/`).subscribe(data => {
            return data;
        });        
    }

    getClassList() {
        let classes: any;
        classes = this.authHttp.get(`${this.url}/class/list/`);
        return classes;
    }

    postStudent(student: Student) {
        this.authHttp.post(`${this.url}/student/`, student).subscribe(data => {
            console.log(data)
        });
    }

    postEmployee(employee: Employee) {
        return this.authHttp.post(`${this.url}/user/`, employee);
    }

    postClass(cls: Class) {
        return this.authHttp.post(`${this.url}/class/`, cls);
    }

    putStudent(student: Student) {
        return this.authHttp.put(`${this.url}/student/`, student);
    }

    putEmployee(employee: Employee) {
        return this.authHttp.put(`${this.url}/user/`, employee);
    }

    putClass(cls: Class) {
        return this.authHttp.put(`${this.url}/class/`, cls);
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

    deleteClass(id: string) {
        const headers = { 'id': id }

        return this.authHttp.delete(`${this.url}/class/`, { headers })
            .subscribe(() => status = "Delete Successful");
    }
}
