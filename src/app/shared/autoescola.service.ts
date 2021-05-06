import { Injectable } from '@angular/core';
import { Student } from './student/student.model';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee/employee.model';
import { Class } from './class/class.model';
import {from, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { DrivingSchool } from './driving-school/driving-school.model';
import {Instructor} from './instructor/instructor.model';
import {Subjects} from './subjects/subjects.model';

@Injectable()
export class AutoescolaService {
    private url = 'http://127.0.0.1:8000';

    constructor(private authHttp: HttpClient) {

    }

    getStudent(id: string) {
        return this.authHttp.get(`${this.url}/estudante/${id}/`);
    }

    getStudentList(): Observable <Student[]> {
        return this.authHttp.get<Student[]>(`${this.url}/estudante/`);
    }

    getEmployee(id: string) {
        return this.authHttp.get(`${this.url}/usuario/${id}/`);
    }

    getClass(id: string) {
        return this.authHttp.get(`${this.url}/class/${id}/`);
    }

    getEmployeeList() {
        this.authHttp.get(`${this.url}/usuario/`).subscribe(data => {
            return data;
        });
    }

    getDrivingSchool(id: string) {
        this.authHttp.get(`${this.url}/driving-school/${id}`).subscribe(data => {
            return data;
        });
    }

    getDrivingSchoolList() {
        let returnValue;
        this.authHttp.get(`${this.url}/driving-school/list/`).subscribe(data => {
            returnValue = data;
        });
        return returnValue;
    }

    getSubjects(id: string) {
        this.authHttp.get(`${this.url}/subject/${id}`).subscribe(data => {
          return data;
        });
    }

    getSubjectsList(): Observable<Subjects[]> {
      return this.authHttp.get<Subjects[]>(`${this.url}/subject/`);
    }

    getClassList() {
        let classes: any;
        classes = this.authHttp.get(`${this.url}/class/list/`);
        return classes;
    }

    postStudent(student: Student) {
        this.authHttp.post(`${this.url}/estudante/`, student).subscribe(data => {
            return data;
        });
    }

    postDrivingSchool(school: DrivingSchool) {
        this.authHttp.post(`${this.url}/driving-school/`, school).subscribe(data => {
            console.log(data)
        });
    }

    postsSubjects(Subject: Subjects) {
      let id;
      this.authHttp.post(`${this.url}/subject/`, Subject).pipe(map(data => {
        id = data;
      })).subscribe();
      return id;
    }

    postEmployee(employee: Employee) {
        return this.authHttp.post(`${this.url}/usuario/`, employee).subscribe(data => {
            console.log(data);
        });
    }

    postClass(cls: Class) {
        return this.authHttp.post(`${this.url}/class/`, cls);
    }

    postInstructor(instructor: Instructor) {
        return this.authHttp.post(`${this.url}/instrutor/`, instructor).subscribe(data => {
          console.log(data);
        });
    }

    patchStudentCheck(student: Student) {
      return this.authHttp.patch(`${this.url}/estudante-check/${student.id}`, student).subscribe();
    }

    putSubjects(subject: Subjects) {
        return this.authHttp.put(`${this.url}/subject/${subject.id}`, subject).subscribe();
    }

    putStudent(student: Student) {
        return this.authHttp.put(`${this.url}/estudante/check/${student.id}`, student).subscribe();
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
