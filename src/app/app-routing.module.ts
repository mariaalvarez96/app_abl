import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SignUpComponent } from './signup/signup.component';
import { HomePage } from './home/home.page';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'app-booking',
    component: BookingComponent
  },
  {
    path: 'app-signup',
    component: SignUpComponent
  },
  {
    path: 'app-home',
    component: HomePage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
