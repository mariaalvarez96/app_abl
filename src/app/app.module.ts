import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { SignUpComponent } from './signup/signup.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { DocumentsComponent } from './documents/documents.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiService } from './services/api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, BookingComponent, SignUpComponent, SuppliesComponent, DocumentsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule, FlexLayoutModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync(), ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
