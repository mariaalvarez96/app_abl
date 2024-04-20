import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    children: [
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.component').then(m => m.SignUpComponent)
      },
    ]
  }, 
  {
    path: '',
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}
