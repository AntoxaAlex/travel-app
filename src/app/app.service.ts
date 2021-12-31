import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable, of, Subject } from 'rxjs';

import { GridSize } from './core/interfaces/grid-size.interface';
import { mockGridSizes } from './core/mock/mockGridSizes';
import { Service } from './core/interfaces/service.interface';
import { mockServices } from './core/mock/mockServices';
import { HttpClient } from '@angular/common/http';
import { FlightData } from './core/interfaces/flight-data.interface';
import { eAirportCodes } from './core/enums/airport-codes.enum';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public pageSize = new Subject<string>();
  public displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private breakPointObserver: BreakpointObserver,
    private httpClient: HttpClient,
  ) {}

  public getSize(): Observable<BreakpointState> {
    return this.breakPointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);
  }

  public setSize(size: string): void {
    this.pageSize.next(size);
  }

  public getGridSizes(size: string): GridSize {
    const sizes: any = { ...mockGridSizes };
    size = size === 'Large' || size === 'XLarge' ? 'Medium' : size;
    return sizes[size];
  }

  public getServices(): Observable<Service[]> {
    return of(mockServices);
  }

  public getCustomFlights(flightData: FlightData): any {
    const codes: any = { ...eAirportCodes };
    const departCode = codes[flightData.from];
    const arrivalCode = flightData.to ? codes[flightData.to] : '';
    const fromWay =
      flightData.way === 'one-way'
        ? `${departCode}`
        : `${departCode},${arrivalCode}`;
    const backWay =
      flightData.way === 'one-way'
        ? `${arrivalCode}`
        : `${arrivalCode},${departCode}`;
    const departureDate =
      flightData.way === 'one-way'
        ? `${flightData.depart!.toDateString()}`
        : `${flightData.depart!.toDateString()},${flightData.return!.toDateString()}`;
    const url =
      flightData.way === 'round-trip'
        ? 'https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip'
        : 'https://priceline-com-provider.p.rapidapi.com/v2/flight/departures';
    console.log(fromWay, backWay, departureDate);
    return this.httpClient.get(url, {
      params: {
        departure_date: departureDate,
        adults: flightData.guests,
        sid: 'iSiX639',
        origin_airport_code: fromWay,
        destination_airport_code: backWay,
      },
      headers: {
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        'x-rapidapi-key': '513cfabccemshbce9a7c2c289be8p11d2cejsnf1b3fda58b57',
      },
    });
  }
}
