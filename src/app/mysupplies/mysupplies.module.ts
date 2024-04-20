import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MysuppliesPage } from './mysupplies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MysuppliesPageRoutingModule } from './mysupplies-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MysuppliesPageRoutingModule
  ],
  declarations: [MysuppliesPage]
})
export class MysuppliesPageModule {}
