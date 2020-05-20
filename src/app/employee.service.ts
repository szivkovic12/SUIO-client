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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
