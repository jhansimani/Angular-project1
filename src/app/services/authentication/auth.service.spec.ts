import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpSpy : jasmine.SpyObj<HttpClient>
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['post'])
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: HttpClient, useValue:httpSpy
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
