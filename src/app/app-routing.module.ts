import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'company/list' },
  { path: 'company/list', component: CompanyListComponent },
  { path: 'company/add', component: CompanyEditComponent },
  { path: 'company/edit/:id', component: CompanyEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
