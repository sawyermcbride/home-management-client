import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SectionsViewComponent } from './sections-view/sections-view.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', component: MainViewComponent },
      {path: 'sections', component: SectionsViewComponent}
    ] 
  }
];
