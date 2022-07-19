import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    }),
    DOB: new FormControl('', Validators.required),
    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    gender: new FormControl('', Validators.required),
    terms: new FormControl('', Validators.requiredTrue),
  });
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.userService.getUser(this.id).subscribe((res) => {
      let {id, ...user} = res;
      console.log(user);
      this.userForm.setValue({
        ...user,
      });
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
    if (!this.userForm.valid) {
      return;
    }
    const obj: User = {
      ...this.userForm.value,
    };
    this.userService.postUser(obj).subscribe((res) => console.log(res));
    this.userForm.reset();
    this.router.navigate(['/users']);
  }

  get street() {
    return this.userForm.get('address.street');
  }
  get city() {
    return this.userForm.get('address.city');
  }
  get state() {
    return this.userForm.get('address.state');
  }
  get zip() {
    return this.userForm.get('address.zip');
  }
  get address() {
    return this.userForm.get('address');
  }
}
