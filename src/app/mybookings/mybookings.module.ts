import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MybookingsPage } from './mybookings.page';
import { MybookingsPageRoutingModule } from './mybookings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MybookingsPageRoutingModule,
  ],
  declarations: [MybookingsPage],
})
export class MybookingsPageModule {}
