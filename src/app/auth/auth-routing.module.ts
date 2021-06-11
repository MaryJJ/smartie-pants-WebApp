import { FinishRegisterComponent } from './register/finish-register/finish-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'register',
    component: RegisterComponent,
    data: { Title: 'Register' },
  },
  {
    path: 'finish-register',
    component: FinishRegisterComponent,
    data: { Title: 'Register' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
