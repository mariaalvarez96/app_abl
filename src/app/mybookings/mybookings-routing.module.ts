import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MybookingsPage } from './mybookings.page';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: MybookingsPage,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybookingsPageRoutingModule {}
