import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelServicesRoutingModule } from './travel-services-routing.module';
import { ServicesListComponent } from '../../ui/components/organisms/services-list/services-list.component';
import { ServicesNavComponent } from '../../ui/components/organisms/services-nav/services-nav.component';
import { ServiceComponent } from '../../ui/components/organisms/service/service.component';
import { LinksComponent } from '../../ui/components/organisms/links/links.component';
import { FlightFormComponent } from '../../ui/components/organisms/forms/flight-form/flight-form.component';
import { TravelServicesComponent } from './travel-services.component';
import { SharedModule } from '../../shared/shared.module';
import { AppService } from '../../app.service';
import { ModalService } from '../../core/services/modal.service';
import { ModalComponent } from '../../ui/components/organisms/modal/modal.component';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TravelServicesModule {}
