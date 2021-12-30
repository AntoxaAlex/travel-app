export interface Service {
  title: string;
  serviceSections: ServiceSection[];
}

export interface ServiceSection {
  sectionName: string;
  imagePath: string;
  text: string;
}
