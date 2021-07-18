import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERPRoutingModule } from './erp-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
     DashboardComponent,
     AccountComponent
  ],
  imports: [
    CommonModule,
    ERPRoutingModule,
  ]
})
export class ERPModule { }
