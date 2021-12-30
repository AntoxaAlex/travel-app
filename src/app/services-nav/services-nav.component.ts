import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Service } from '../core/interfaces/service.interface';

@Component({
  selector: 'app-services-nav',
  templateUrl: './services-nav.component.html',
  styleUrls: ['./services-nav.component.scss'],
})
export class ServicesNavComponent implements OnInit {
  @Input() public services: Service[];
  @Output() public serviceSelected = new EventEmitter<Service>();
  constructor() {}

  ngOnInit(): void {}

  public selectService(service: Service): void {
    this.serviceSelected.emit(service);
  }
}
