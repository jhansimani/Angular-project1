import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  onUpdate(user: User) {
    this.router.navigate(['edit-user', user.id]);
  }
  onDelete(user: User) {
    this.userService.deleteUser(user).subscribe((res) => {
      this.users.splice(res.id, 1);
    });
  }
  GotoDetailsPage(user: User) {
    this.router.navigate([`${user.id}`], { relativeTo: this.activatedRoute });
  }
}
