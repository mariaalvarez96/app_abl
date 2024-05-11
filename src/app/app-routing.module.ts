import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SignUpComponent } from './signup/signup.component';
import { HomePage } from './home/home.page';
import { MybookingsPage } from './mybookings/mybookings.page';
import { SuppliesComponent } from './supplies/supplies.component';
import { DocumentsComponent } from './documents/documents.component';



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
  },
  {
    path: 'app-mybookings',
    component: MybookingsPage
  },
  {
    path: 'app-supplies',
    component: SuppliesComponent
  },
  {
    path: 'app-documents',
    component: DocumentsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
