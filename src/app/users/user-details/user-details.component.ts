import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  user!: User;
  id!: number;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.userService.getUser(this.id).subscribe((res) => {
      this.user = res;
    });
  }
  OnKeyUp(event: any) {
    console.log('keyup', event);
  }
  onKeydown(event: any) {
    console.log('keydown', event.target.value);
  }
}
