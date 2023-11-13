import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './guardian/maintenance/maintenance.component';
import { ListingComponent } from './guardian/listing/listing.component';

const routes: Routes = [
  {
    path: "listing-guardians",
    component: ListingComponent
  },
  {
    path: "register-guardian",
    component: MaintenanceComponent
  },
  {
    path: "edit-guardian/:id",
    component: MaintenanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }