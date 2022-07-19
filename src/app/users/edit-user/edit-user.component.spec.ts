import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', [
      'updateUser',
      'getUser',
    ]);
    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
        {
          provide: UserService,
          useValue: userServiceSpy,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    userServiceSpy.getUser.and.returnValue(
      of({
        firstName: 'Jhansimani',
        lastName: 'Maradana',
        email: 'test1@gmail.com',
        password: '123456',
        address: {
          street: '7-32/7',
          city: 'Bobbili',
          state: 'AP',
          zip: '535558',
        },
        DOB: '2022-07-11',
        mobile: 8912346578,
        gender: 'female',
        terms: true,
        id: 1,
      })
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    userServiceSpy.getUser(1).subscribe((res) => {
      expect(res).toEqual({
        firstName: 'Jhansimani',
        lastName: 'Maradana',
        email: 'test1@gmail.com',
        password: '123456',
        address: {
          street: '7-32/7',
          city: 'Bobbili',
          state: 'AP',
          zip: '535558',
        },
        DOB: '2022-07-11',
        mobile: 8912346578,
        gender: 'female',
        terms: true,
        id: 1,
      });
    });
    expect(component).toBeTruthy();
  });
});
