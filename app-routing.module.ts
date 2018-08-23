import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/users', 
    pathMatch: 'full' 
  },
  {
    path: 'users',    
    component: ListComponent
  },
  { 
    path: 'users/:id',    
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**', 
    redirectTo: '/users'    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
