export interface FlightData {
  way: string;
  from: string;
  to: string;
  depart: Date | null;
  return?: Date | null;
  guests: number;
  travelClass: string;
  airlines: string[];
  near: boolean;
}
