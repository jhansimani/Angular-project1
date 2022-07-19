import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http
      .post<User>('http://localhost:3000/users', user)
      .pipe(catchError(this.handleError));
  }
  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.status === 0) {
      console.log('client side error' + errorResponse.error);
    } else {
      console.log('server side error' + errorResponse.error);
    }
    return throwError(() => new Error('Something is happened'));
  }
  getUsers() {
    return this.http
      .get<User[]>('http://localhost:3000/users')
      .pipe(catchError(this.handleError));
  }
  deleteUser(user: User) {
    return this.http
      .delete<User>('http://localhost:3000/users/' + user.id)
      .pipe(catchError(this.handleError));
  }
  updateuser(user: User) {
    return this.http
      .put<User>('http://localhost:3000/users/', user)
      .pipe(catchError(this.handleError));
  }
  getUser(id: Number) {
    return this.http
      .get<User>('http://localhost:3000/users/' + id)
      .pipe(catchError(this.handleError));
  }
}
