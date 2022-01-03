import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { Subscription } from "rxjs";

import { Service, ServiceSection} from '../../../../core/interfaces/service.interface';
import { FlightData } from '../../../../core/interfaces/flight-data.interface';
import { AppService } from '../../../../app.service';
import { eServiceTitles } from '../../../../core/enums/service-titles.enum';
import { OneWayRespond, RoundTripRespond } from "../../../../core/interfaces/travel-app-respond.interface";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnDestroy {
  public serviceTitles = eServiceTitles;
  public flightSubscription: Subscription;
  @Input() public service: Service;
  @Input() public selectedSection: ServiceSection;
  @Output() public flightIsFound = new EventEmitter<any>();

  constructor(private appService: AppService) {}

  ngOnDestroy() {
    //Unsubscribe the flight subscription
    this.flightSubscription.unsubscribe();
  }

  public submitFlight(flightData: FlightData): void {
    //Create flight subscription
     this.flightSubscription = this.appService.getCustomFlights(flightData).subscribe(
      (respond: OneWayRespond | RoundTripRespond) => {
        const newFlightData = this.appService.createTableData(respond);
        this.flightIsFound.emit(newFlightData);
      },
      (error: Error) => {
        throw new Error(error.message);
      },
    );
  }
}
