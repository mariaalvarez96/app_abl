import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MybookingsPage } from './mybookings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MybookingsPageRoutingModule } from './mybookings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MybookingsPageRoutingModule
  ],
  declarations: [MybookingsPage]
})
export class MybookingsPageModule {}
