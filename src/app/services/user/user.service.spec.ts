import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { catchError, Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let user: User;
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
    user = {
      firstName: 'Mani',
      lastName: 'Maradana',
      email: 'test1@gmail.com',
      password: '123456',
      address: {
        street: '7-32/7',
        city: 'Bobbili',
        state: 'MP',
        zip: '535558',
      },
      DOB: '2022-07-11',
      mobile: 8907654321,
      gender: 'female',
      terms: true,
      id: 2,
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        {
          provide: HttpClient,
          useValue: httpSpy,
        },
      ],
    });
    service = TestBed.inject(UserService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call post method', () => {
    httpSpy.post.and.returnValue(of(user));
    service.postUser(user).subscribe((res) => {
      expect(res).toEqual(user);
    });

    expect(httpSpy.post).toHaveBeenCalledTimes(1);
    expect(httpSpy.post.calls.count()).toBe(1);
  });
  it('should call post method handling errors', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
    httpSpy.post.and.returnValue(of(errorResponse));
    // service.handleError().subscribe()
    service.postUser(user).subscribe(
      (res) => {
        done.fail('Falied');
      },
      (err) => {
        console.log('err', err);
        expect(err.error).toContain('test 404 error');
        done();
      }
    );
  });
});
