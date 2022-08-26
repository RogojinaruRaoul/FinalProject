import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarFormComponent} from './car-form/car-form.component';
import {ReservationListComponent} from "./reservation-list/reservation-list.component";
import {ReservationFormComponent} from "./reservation-form/reservation-form.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeFormComponent} from "./employee-form/employee-form.component";
import {BranchListComponent} from "./branch-list/branch-list.component";
import {BranchFormComponent} from "./branch-form/branch-form.component";

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'add-car', component: CarFormComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'add-reservation', component: ReservationFormComponent },
  { path: 'employee', component: EmployeeListComponent},
  { path: 'add-employees', component: EmployeeFormComponent},
  { path: 'branch', component:BranchListComponent},
  { path: 'add-branches', component: BranchFormComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
