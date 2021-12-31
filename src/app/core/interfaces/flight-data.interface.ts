export interface FlightDataInterface {
  way: string;
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  guests: number;
  travelClass: string;
  airlines: string[];
  near: boolean;
}

export class FlightData implements FlightDataInterface {
  constructor(
    public way: string,
    public from: string,
    public to: string,
    public departDate: string,
    public returnDate: string,
    public guests: number,
    public travelClass: string,
    public airlines: string[],
    public near: boolean,
  ) {}
}
