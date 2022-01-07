import { Injectable } from '@angular/core';
import { Student } from './student/student.model';
import {HttpClient, HttpParams, HttpBackend} from '@angular/common/http';
import { Employee } from './employee/employee.model';
import { Class } from './class/class.model';
import {from, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { DrivingSchool } from './driving-school/driving-school.model';
import {Instructor} from './instructor/instructor.model';
import {Subjects} from './subjects/subjects.model';
import {Trafficticket} from './traffic-ticket/trafficticket.model';
import {InstructorClass} from './instructor-class/instructor-class.model';
import {Relationship} from './relationship/relationship.model';
import {PracticalTable} from './practical-table/practical-table.model';
import {PracticalLines} from './practical-lines/practical-lines.model';

@Injectable()
export class AutoescolaService {
    private url = 'https://autoescolaalbuquerque.com:5000';
    // private url = 'http://127.0.0.1:8000';
    client: any;
    constructor(private authHttp: HttpClient, private httpBackend: HttpBackend) {
      this.client = new HttpClient(httpBackend);
    }
    login(username: string, password: string) {
      return this.client.post(`${this.url}/api-token-auth/`, {username: username, password: password});
    }

    getStudent(id: string) {
      return this.authHttp.get(`${this.url}/estudante/${id}`);
    }

    getStudentRelationship(id: string) {
      return this.authHttp.get(`${this.url}/estudantes-relacao/${id}`);
    }

    getStudentList(): Observable <Student[]> {
        return this.authHttp.get<Student[]>(`${this.url}/estudante/`);
    }

    getStudentByType(id: number) {
      return this.authHttp.get(`${this.url}/estudante-tipo/${id}`);
    }

    patchCity(obj: any) {
        return this.authHttp.patch(`${this.url}/franquia/${obj.id}`, obj);
    }

    getEmployee(id: string) {
        return this.authHttp.get(`${this.url}/usuario/${id}`);
    }
    getEmployeeName(email: string) {
        let params = new HttpParams().set('email', email);
        return this.authHttp.get(`${this.url}/usuario-email/`, { params: params});
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

    getRelationShipByClass(id: number) {
      return this.authHttp.get(`${this.url}/relacao-turma/${id}`);
    }

    getInstructorClass(id: number): Observable<InstructorClass[]> {
      return this.authHttp.get<InstructorClass[]>(`${this.url}/aula-instrutor/${id}`);
    }

    getTrafficTicket(id: string) {
        return this.authHttp.get(`${this.url}/multas/${id}`);
    }

    getTable(id: string) {
      return this.authHttp.get(`${this.url}/tabela-pratica/${id}`);
    }

    getLines(id: string) {
      return this.authHttp.get(`${this.url}/linha-pratica/${id}`);
    }

    getTrafficTicketList() {
        return this.authHttp.get(`${this.url}/multas/`);
    }

    getClass(id: number) {
        return this.authHttp.get(`${this.url}/turma/${id}`);
    }
    getClassList() {
      return this.authHttp.get(`${this.url}/turma/`);
    }
    getCity(id: string) {
        return this.authHttp.get(`${this.url}/franquia/${id}`);
    }

    getCityList() {
        return this.authHttp.get(`${this.url}/franquia/`);
    }

    getTableList() {
      return this.authHttp.get(`${this.url}/tabela-pratica/`);
    }

    getLineByTable(id: string) {
      return this.authHttp.get(`${this.url}/linha-pratica-tabela/${id}`);
    }

    getLinesList() {
      return this.authHttp.get(`${this.url}/linha-pratica/`);
    }

    getSubjects(id: string) {
        this.authHttp.get(`${this.url}/subject/${id}`).subscribe(data => {
          return data;
        });
    }

    getSubjectsList(): Observable<Subjects[]> {
      return this.authHttp.get<Subjects[]>(`${this.url}/subject/`);
    }

    postStudent(student: Student) {
        return this.authHttp.post(`${this.url}/estudante/`, student);
    }

    postEmployee(employee: Employee) {
       return this.authHttp.post(`${this.url}/usuario/`, employee);
    }

    postTrafficTicket(traffic: Trafficticket) {
        return this.authHttp.post(`${this.url}/multas/`, traffic);
    }

    postDrivingSchool(school: DrivingSchool) {
       return this.authHttp.post(`${this.url}/franquia/`, school);
    }

    postsSubjects(Subject: Subjects) {
      let id;
      this.authHttp.post(`${this.url}/subject/`, Subject).pipe(map(data => {
        id = data;
      })).subscribe();
      return id;
    }

    postClass(cls: Class) {
        return this.authHttp.post(`${this.url}/turma/`, cls);
    }

    postRelationship(relation: Relationship) {
      return this.authHttp.post(`${this.url}/relacao/`, relation);
    }

    postTable(table: PracticalTable) {
      return this.authHttp.post(`${this.url}/tabela-pratica/`, table);
    }

    patchTable(table: PracticalTable) {
      return this.authHttp.patch(`${this.url}/tabela-pratica/${table.id}`, table);
    }

    postLine(line: PracticalLines) {
      return this.authHttp.post(`${this.url}/linha-pratica/`, line);
    }

    postInstructor(instructor: Instructor) {
        return this.authHttp.post(`${this.url}/instrutor/`, instructor);
    }

    postInstructorClass(instructorClass: InstructorClass) {
        return this.authHttp.post(`${this.url}/aula-instrutor/`, instructorClass);
    }

    patchStudent(student: Student) {
      return this.authHttp.patch(`${this.url}/estudante-check/${student.id}`, student);
    }
    patchInstructorClassCheck(instructorClass: InstructorClass) {
      return this.authHttp.patch(`${this.url}/aula-instrutor/${instructorClass.id}`, instructorClass).subscribe();
    }
    putSubjects(subject: Subjects) {
        return this.authHttp.put(`${this.url}/subject/${subject.id}`, subject).subscribe();
    }

    putStudent(student: Student) {
        return this.authHttp.put(`${this.url}/estudante/${student.id}`, student);
    }

    patchLine(index: number, line: PracticalLines) {
      return this.authHttp.patch(`${this.url}/linha-pratica/${index}`, line);
    }

    putEmployee(employee: Employee) {
        return this.authHttp.put(`${this.url}/user/`, employee);
    }

    putClass(cls: Class) {
        return this.authHttp.put(`${this.url}/turma/${cls.id}`, cls);
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
    deleteRelationship(student: any) {
        return this.authHttp.delete(`${this.url}/relacao-delete/${student.id}`).subscribe();
    }
    deleteClasses(cls: Class) {
      return this.authHttp.delete(`${this.url}/turma/${cls.id}`).subscribe();
    }
    deleteDrivingSchool(franchise: DrivingSchool) {
      return this.authHttp.delete(`${this.url}/franquia/${franchise.id}`).subscribe();
    }
    deleteAllInstructorClass() {
        return this.authHttp.delete(`${this.url}/aula-instrutor/`).subscribe();
    }
    deleteTable(table: PracticalTable) {
      return this.authHttp.delete(`${this.url}/tabela-pratica/${table.id}`);
    }
    deleteLine(line: PracticalLines) {
      return this.authHttp.delete(`${this.url}/linha-pratica/${line.id}`);
    }
}
