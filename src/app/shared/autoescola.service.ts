import { Injectable } from '@angular/core';
import { Student } from './student/student.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from './employee/employee.model';
import { Class } from './class/class.model';
import {from, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { DrivingSchool } from './driving-school/driving-school.model';
import {Instructor} from './instructor/instructor.model';
import {Subjects} from './subjects/subjects.model';
import {Trafficticket} from './traffic-ticket/trafficticket.model';
import {InstructorClass} from './instructor-class/instructor-class.model';

@Injectable()
export class AutoescolaService {
    private url = 'http://127.0.0.1:8000';

    constructor(private authHttp: HttpClient) {

    }


    getStudent(id: string) {
        return this.authHttp.get(`${this.url}/estudante/${id}`);
    }

    getStudentList(): Observable <Student[]> {
        return this.authHttp.get<Student[]>(`${this.url}/estudante/`);
    }

    getEmployee(id: string) {
        return this.authHttp.get(`${this.url}/usuario/${id}`);
    }

    getEmployeeList(): Observable <Employee[]> {
      return this.authHttp.get<Employee[]>(`${this.url}/usuario/`);
    }

    getInstructor(id: string) {
        return this.authHttp.get(`${this.url}/instrutor/${id}`);
    }

    getInstructorList(): Observable<Instructor[]> {
        return this.authHttp.get<Instructor[]>(`${this.url}/instrutor/`);
    }

    getTheoreticalInstructorClassList(id: string) {
        return this.authHttp.get(`${this.url}/aula-teorica-instrutor/${id}`);
    }

    getPracticalInstructorClassList(id: string) {
        return this.authHttp.get(`${this.url}/aula-pratica-instrutor/${id}`);
    }

    getInstructorClass(id: number): Observable<InstructorClass[]> {
      return this.authHttp.get<InstructorClass[]>(`${this.url}/aula-instrutor/${id}`);
    }

    getTrafficTicket(id: string) {
        return this.authHttp.get(`${this.url}/multas/${id}`);
    }

    getTrafficTicketList() {
        return this.authHttp.get(`${this.url}/multas/`);
    }

    getClass(id: string) {
        return this.authHttp.get(`${this.url}/class/${id}/`);
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

    postEmployee(employee: Employee) {
      this.authHttp.post(`${this.url}/usuario/`, employee).subscribe(data => {
        return data;
      });
    }

    postTrafficTicket(traffic: Trafficticket) {
        this.authHttp.post(`${this.url}/multas/`, traffic).subscribe(data => {
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

    postClass(cls: Class) {
        return this.authHttp.post(`${this.url}/class/`, cls);
    }

    postInstructor(instructor: Instructor) {
        return this.authHttp.post(`${this.url}/instrutor/`, instructor).subscribe(data => {
          console.log(data);
        });
    }

    postInstructorClass(instructorClass: InstructorClass) {
        return this.authHttp.post(`${this.url}/aula-instrutor/`, instructorClass);
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

    deleteStudent(student: Student) {
        return this.authHttp.delete(`${this.url}/estudante/${student.id}`).subscribe();
    }

    deleteTrafficTicket(ticket: Trafficticket) {
        return this.authHttp.delete(`${this.url}/multas/${ticket.id}`).subscribe();
    }

    deleteEmployee(employee: Employee) {
        return this.authHttp.delete(`${this.url}/usuario/${employee.id}`).subscribe();
    }

    deleteInstructor(instructor: Instructor) {
        return this.authHttp.delete(`${this.url}/instrutor/${instructor.id}`).subscribe();
    }

    deleteInstructorClass(instructorClass: InstructorClass) {
      return this.authHttp.delete(`${this.url}/aula-instrutor/${instructorClass.id}`).subscribe();
    }

    deleteAllInstructorClass() {
        return this.authHttp.delete(`${this.url}/aula-instrutor/`).subscribe();
    }

}
