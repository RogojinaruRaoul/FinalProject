import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarService} from './car-service/car.service';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component'
import {ReservationService} from "./reservation/reservation-service.service";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { RefundListComponent } from './refund-list/refund-list.component';
import { RefundFormComponent } from './refund-form/refund-form.component';
import {RefundService} from './refund-service/refund.service';
import { BranchListComponent } from './branch-list/branch-list.component';
// import { CompanyListComponent } from './company-list/company-list.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
// import { CompanyFormComponent } from './company-form/company-form.component';
import {BranchService} from "./branch-service/branch.service";
import {EmployeeService} from "./employee-service/employee.service";
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarFormComponent,
    ReservationListComponent,
    ReservationFormComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    CustomerFormComponent,
    CustomerListComponent,
    BranchListComponent,
    // CompanyListComponent,
    BranchFormComponent,
    // CompanyFormComponent
    EmployeeFormComponent,
    RefundListComponent,
    RefundFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService, ReservationService, BranchService, EmployeeService,RefundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
