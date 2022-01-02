import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable, of, Subject } from 'rxjs';
import * as moment from "moment";
import { HttpClient } from '@angular/common/http';

import { GridSize } from './core/interfaces/grid-size.interface';
import { mockGridSizes } from './core/mock/mockGridSizes';
import { Service } from './core/interfaces/service.interface';
import { mockServices } from './core/mock/mockServices';
import { FlightData } from './core/interfaces/flight-data.interface';
import { eAirportCodes } from './core/enums/airport-codes.enum';
import { eSizes } from './core/enums/sizes.enum';
import { eWays } from './core/enums/ways.enum';
import {FlightDetail} from "./core/interfaces/flights-table.interface";
import {Carrier} from "./core/interfaces/travel-app-respond.interface";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public pageSize = new Subject<string>();
  public displayNameMap = new Map([
    [Breakpoints.XSmall, eSizes.XSmall],
    [Breakpoints.Small, eSizes.Small],
    [Breakpoints.Medium, eSizes.Medium],
    [Breakpoints.Large, eSizes.Large],
    [Breakpoints.XLarge, eSizes.XLarge],
  ]);

  constructor(
    private breakPointObserver: BreakpointObserver,
    private httpClient: HttpClient,
  ) {}

  //Get page size
  public getSize(): Observable<BreakpointState> {
    return this.breakPointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);
  }

  //Set page size
  public setSize(size: string): void {
    this.pageSize.next(size);
  }

  //Get page grid sizes
  public getGridSizes(size: string): GridSize {
    const sizes: any = { ...mockGridSizes };
    size =
      size === eSizes.Large || size === eSizes.XLarge ? eSizes.Medium : size;
    return sizes[size];
  }

  //Get actual travel service
  public getServices(): Observable<Service[]> {
    return of(mockServices);
  }

  //Get flight data from API
  public getCustomFlights(flightData: FlightData): Observable<any> {
    const codes: {[key:string]: string} = { ...eAirportCodes };
    const departCode = codes[flightData.from];
    const arrivalCode = flightData.to ? codes[flightData.to] : '';
    const fromWay =
      flightData.way === eWays.oneWay
        ? `${departCode}`
        : `${departCode},${arrivalCode}`;
    const backWay =
      flightData.way === eWays.oneWay
        ? `${arrivalCode}`
        : `${arrivalCode},${departCode}`;
    const departureDate =
      flightData.way === eWays.oneWay
        ? `${flightData.departDate}`
        : `${flightData.departDate},${flightData.returnDate}`;
    const url =
      flightData.way === eWays.roundTrip
        ? 'https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip'
        : 'https://priceline-com-provider.p.rapidapi.com/v2/flight/departures';
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

  public createTableData(respond: any):FlightDetail[] | void{
    let way: string = respond.getAirFlightDepartures ? 'one-way' : 'round-trip';
    let num: number;
    let from: string;
    let carrier
    let to: string;
    let duration: string;
    let price: string;
    const tripFlights: FlightDetail[] = [];

    //Create array of one-way flight details for modal table
    if(way === 'one-way'){
      let index = 1;
      const itineraryArr = respond.getAirFlightDepartures.results.result.itinerary_data
      for (let itinerary in itineraryArr){
        //Restrict response data to 10 elements
        if(index < 10){
          num = index;
          from = itineraryArr[itinerary].slice_data.slice_0.departure.airport.code;
          to = itineraryArr[itinerary].slice_data.slice_0.arrival.airport.code;
          carrier = itineraryArr[itinerary].slice_data.slice_0.airline.code;
          price = itineraryArr[itinerary].price_details.source_total_fare + 'USD'
          //Use moment to find duration between departure date and arrival date
          const departDate = moment(new Date(itineraryArr[itinerary].slice_data.slice_0.departure.datetime.date_time)).format();
          const arrDate = moment(new Date(itineraryArr[itinerary].slice_data.slice_0.arrival.datetime.date_time));
          const momentDuration = moment.duration(arrDate.diff(moment(departDate)));
          duration = Math.round(momentDuration.asHours()) + ' hours'

          tripFlights.push({
            num,
            from,
            to,
            carrier,
            price,
            duration
          })
          index++;
        }
      }
      return tripFlights
    }
    //Create array of round-trip flight details for modal table
    if(way === 'round-trip'){
      respond.getAirFlightRoundTrip.results.air_search_rsp.total_trip_summary.carrier.map((mapCarrier: Carrier,index: number) => {
        //Restrict response data to 10 elements
        if(index < 10) {
          num = index + 1;
          from = mapCarrier.airport[0].origAirport;
          to = mapCarrier.airport[0].destAirport;
          carrier = mapCarrier.code;
          price = `${mapCarrier.airport[0].stops[0].lowestTotalFare}USD`
          duration = Math.round(respond.getAirFlightRoundTrip.results.air_search_rsp.total_trip_summary.minDuration/60) + ' hours';

          tripFlights.push({
            num,
            from,
            to,
            carrier,
            price,
            duration
          })
        }
      })
      return tripFlights
    }
  }

}
