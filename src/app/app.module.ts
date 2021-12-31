import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from './shared/share.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ExpandedContentComponent } from './core/components/header/expanded-content/expanded-content.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesNavComponent } from './services-nav/services-nav.component';
import { ServiceComponent } from './service/service.component';
import { LinksComponent } from './links/links.component';
import { FlightFormComponent } from './forms/flight-form/flight-form.component';
import { CarFormComponent } from './forms/car-form/car-form.component';
import { GuidFormComponent } from './forms/guid-form/guid-form.component';
import { HotelFormComponent } from './forms/hotel-form/hotel-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpandedContentComponent,
    ServicesListComponent,
    ServicesNavComponent,
    ServiceComponent,
    LinksComponent,
    FlightFormComponent,
    CarFormComponent,
    GuidFormComponent,
    HotelFormComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
