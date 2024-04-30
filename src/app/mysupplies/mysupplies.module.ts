import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MysuppliesPage } from './mysupplies.page';
import { MysuppliesPageRoutingModule } from './mysupplies-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MysuppliesPageRoutingModule
  ],
  declarations: [MysuppliesPage]
})
export class MysuppliesPageModule {}
