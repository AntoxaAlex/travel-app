import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, Observable, of, Subject } from 'rxjs';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

import { GridSize } from './core/interfaces/grid-size.interface';
import { mockGridSizes } from './core/mock/mockGridSizes';
import { Service } from './core/interfaces/service.interface';
import { mockServices } from './core/mock/mockServices';
import { FlightData } from './core/interfaces/flight-data.interface';
import { eAirportCodes } from './core/enums/airport-codes.enum';
import { eSizes } from './core/enums/sizes.enum';
import { eWays } from './core/enums/ways.enum';
import { FlightDetail } from './core/interfaces/flights-table.interface';
import { Carrier, Itinenary } from './core/interfaces/travel-app-respond.interface';

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

  public getSizeSubscription():Observable<string> {
    return this.getSize().pipe(
      map((data) => Object.keys(data.breakpoints).find((query) => data.breakpoints[query])!),
    )
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

  //Flight table data creation method
  public createTableData(respond: any):FlightDetail[] | void{
    let way: string = respond.getAirFlightDepartures ? eWays.oneWay : eWays.roundTrip;
    //Check if trip is one-way
    if(way === eWays.oneWay){
      const itineraryArr = respond.getAirFlightDepartures.results.result.itinerary_data
      return this.createOneWayFlights(itineraryArr)
    }
    //Check if trip is round-trip
    if(way === eWays.roundTrip){
      const carriers = respond.getAirFlightRoundTrip.results.air_search_rsp.total_trip_summary.carrier;
      const minDuration = respond.getAirFlightRoundTrip.results.air_search_rsp.total_trip_summary.minDuration;
      return this.createRoundTripFlights(carriers,minDuration);
    }
  }

  //One-way flights data creation method
  private createOneWayFlights(itineraryArr: {[key:string]:Itinenary}): FlightDetail[] {
    let result: FlightDetail[] = [];
    let index = 1;
    //Loop through keys of itineraryArr object
    for (let itinerary in itineraryArr) {
      const currentItinerary = itineraryArr[itinerary];
      let flightDetail: FlightDetail;
      //Set duration
      const duration = this.setDuration(
        currentItinerary.slice_data.slice_0.departure.datetime.date_time,
        currentItinerary.slice_data.slice_0.arrival.datetime.date_time
      )
      //Create flight detail
      flightDetail = {
        num: index,
        from: itineraryArr[itinerary].slice_data.slice_0.departure.airport.code,
        to: itineraryArr[itinerary].slice_data.slice_0.arrival.airport.code,
        carrier: itineraryArr[itinerary].slice_data.slice_0.airline.code,
        price: itineraryArr[itinerary].price_details.source_total_fare + 'USD',
        duration
      }
      //Push flight detail to result array of flight details
      result.push(flightDetail)
      index++
    }
    //Return first 10 elements of result array
    return result.splice(0,10)
  }

  //Round-trip flights data creation method
  public createRoundTripFlights(carriers: Carrier[],minDration: number): FlightDetail[] {
     //Loop through array of carriers
     return carriers.splice(0,10).map((mapCarrier: Carrier,index: number) => {
       const num = index + 1;
       const from = mapCarrier.airport[0].origAirport;
       const to = mapCarrier.airport[0].destAirport;
       const carrier = mapCarrier.code;
       const price = `${mapCarrier.airport[0].stops[0].lowestTotalFare}USD`
       const duration = Math.round(minDration/60) + ' hours';

       //Return flight details arr
       return {
         num,
         from,
         to,
         carrier,
         price,
         duration
       }
    })
  }

  //Create duration between two dates
  public setDuration(depart: string, arr: string):string {
    let departDate = moment(new Date(depart)).format();
    let arrDate = moment(new Date(arr));
    const momentDuration = moment.duration(arrDate.diff(moment(departDate)));
    return  Math.round(momentDuration.asHours()) + ' hours'
  }

}
