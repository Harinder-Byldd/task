import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  {
    path: 'add',
    component: EmployeeAddComponent,
    pathMatch: 'full',
  },
  {
    path: 'update/:id',
    component: EmployeeAddComponent,
  },
  {
    path: '**',
    component: EmployeeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
