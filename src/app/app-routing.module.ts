import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: '',
    redirectTo:'erp',
     pathMatch: 'full',

  },
 
  {
    path: 'erp',
    loadChildren: () => import('./erp/erp.module').then(m => m.ERPModule)
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
