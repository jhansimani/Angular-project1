import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, EditUserComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
  providers: [],
})
export class UsersModule {}
