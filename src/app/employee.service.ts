import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = `http://localhost:8080/employee/`;
 
  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl)
      .pipe(
        tap(_ => console.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployee', []))
      );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee).pipe(
      tap((newEmployee: Employee) => console.log(`added employee w/ ID=${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.employeeUrl+id)
      .pipe(
        tap(_ => console.log('fetched employee by id')),
        catchError(this.handleError<Employee>('getEmployee'))
      );
  }

  updateEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeeUrl}/${employee.id}`;
    return this.http.put(url, employee).pipe(
      tap(_ => console.log(`updated employee`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeeUrl}/${id}`;

    return this.http.delete<Employee>(url).pipe(
      tap(_ => console.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
