import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Type } from './type.model';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private typeUrl = 'http://localhost:8080/type/';

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typeUrl)
      .pipe(
        tap(_ => console.log('fetched asset types')),
        catchError(this.handleError<Type[]>('getType', []))
      );
  }
  getTypeById(id: number): Observable<Type> {
    return this.http.get<Type>(this.typeUrl+id)
      .pipe(
        tap(_ => console.log('fetched type by id')),
        catchError(this.handleError<Type>('getType'))
      );
  }
  addType(type: Type): Observable<Type> {
    return this.http.post<Type>(this.typeUrl, type).pipe(
      tap((newType: Type) => console.log('add type')),
      catchError(this.handleError<Type>('addType'))
    );
  }  
  updateType(type: Type): Observable<any> {
    const url = `${this.typeUrl}update/${type.id}`;
    return this.http.put(url, type).pipe(
      tap(_ => console.log(`updated type`)),
      catchError(this.handleError<any>('updateType'))
    );
  }

  deleteType(type: Type | number): Observable<Type> {
    const id = typeof type === 'number' ? type : type.id;
    const url = `${this.typeUrl}delete/${id}`;

    return this.http.delete<Type>(url).pipe(
      tap(_ => console.log(`deleted type id=${id}`)),
      catchError(this.handleError<Type>('deleteType'))
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
