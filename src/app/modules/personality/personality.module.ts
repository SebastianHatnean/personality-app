import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpHeaders,
  HttpClientJsonpModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ContainerComponent, DashboardComponent, NavbarComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    ContainerComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class PersonalityModule {}
