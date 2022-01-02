import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Service } from '../../../../core/interfaces/service.interface';
import { eServiceTitles } from '../../../../core/enums/service-titles.enum';

@Component({
  selector: 'app-services-nav',
  templateUrl: './services-nav.component.html',
  styleUrls: ['./services-nav.component.scss'],
})
export class ServicesNavComponent {
  @Input() public services: Service[];
  @Output() public serviceSelected = new EventEmitter<Service>();

  constructor() {}

  public selectService(service: Service): void {
    if (service.title === eServiceTitles.flights) {
      this.serviceSelected.emit(service);
    }
  }
}
