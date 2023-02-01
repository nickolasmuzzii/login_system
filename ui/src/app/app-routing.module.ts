import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { Router } from '@angular/router';
import { PersonalInfosComponent } from './components/personal-infos/personal-infos.component'
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastro',
  },
  {
    path: 'cadastro',
    component: RegisterFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'personal-infos',
    component: PersonalInfosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
