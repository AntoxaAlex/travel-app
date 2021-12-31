import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightFormComponent } from '../../ui/components/orgranisms/forms/flight-form/flight-form.component';
import { TravelServicesComponent } from './travel-services.component';

const routes: Routes = [
  {
    path: '',
    component: TravelServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelServicesRoutingModule {}
