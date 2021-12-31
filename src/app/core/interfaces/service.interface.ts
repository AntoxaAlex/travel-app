import { ServiceFormType } from '../types/service.type';

export interface Service {
  title: string;
  serviceSections: ServiceSection[];
  formData?: ServiceFormType;
}

export interface ServiceSection {
  sectionName: string;
  imagePath: string;
  text: string;
}

export interface FlightFormData {
  ways: string[];
  from: string[];
  to: string[];
  guests: number[];
  travelClasses: string[];
  airlines: string[];
}
