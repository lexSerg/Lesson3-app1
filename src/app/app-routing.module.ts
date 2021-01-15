import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './enithy/components/users/all-users/all-users.component';
import { FullUserComponent } from './enithy/components/users/full-user/full-user.component';
import { UsersResolveService } from './enithy/services/users-resolve.service';

const routes: Routes = [
  {
    path: 'users', component: AllUsersComponent,  resolve : {usersData : UsersResolveService},
    children: [{
      path: 'details/:id', component: FullUserComponent,
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
