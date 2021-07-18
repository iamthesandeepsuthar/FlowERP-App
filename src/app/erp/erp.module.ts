import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERPRoutingModule } from './erp-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
     DashboardComponent,
     AccountComponent
  ],
  imports: [
    CommonModule,
  
    ERPRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ]
})
export class ERPModule { }
