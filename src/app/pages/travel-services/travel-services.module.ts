import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelServicesRoutingModule } from './travel-services-routing.module';
import { ServicesListComponent } from '../../ui/components/orgranisms/services-list/services-list.component';
import { ServicesNavComponent } from '../../ui/components/orgranisms/services-nav/services-nav.component';
import { ServiceComponent } from '../../ui/components/orgranisms/service/service.component';
import { LinksComponent } from '../../ui/components/orgranisms/links/links.component';
import { FlightFormComponent } from '../../ui/components/orgranisms/forms/flight-form/flight-form.component';
import { TravelServicesComponent } from './travel-services.component';
import { SharedModule } from '../../shared/shared.module';
import { AppService } from '../../app.service';
import { ModalService } from '../../core/services/modal.service';
import { ModalComponent } from "../../ui/components/orgranisms/modal/modal.component";

@NgModule({
  declarations: [
    ServicesListComponent,
    ServicesNavComponent,
    ServiceComponent,
    LinksComponent,
    FlightFormComponent,
    TravelServicesComponent,
    ModalComponent,
  ],
  imports: [CommonModule, TravelServicesRoutingModule, SharedModule],
  providers: [AppService, ModalService],
  exports: [
    ServicesListComponent,
    ServicesNavComponent,
    ServiceComponent,
    LinksComponent,
    FlightFormComponent,
    TravelServicesComponent,
  ],
})
export class TravelServicesModule {}
