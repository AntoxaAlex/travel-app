import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  Service,
  ServiceSection,
} from '../../../../core/interfaces/service.interface';
import { FlightData } from '../../../../core/interfaces/flight-data.interface';
import { AppService } from '../../../../app.service';
import { eServiceTitles } from '../../../../core/enums/service-titles.enum';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public serviceTitles = eServiceTitles;
  @Input() public service: Service;
  @Input() public selectedSection: ServiceSection;
  @Output() public flightIsFound = new EventEmitter<any>();
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  public submitFlight(flightData: FlightData): void {
    this.appService.getCustomFlights(flightData).subscribe(
      (data: any) => {
        console.log(data);
        this.flightIsFound.emit(data);
      },
      (error: Error) => {
        console.log(error);
      },
    );
  }
}
