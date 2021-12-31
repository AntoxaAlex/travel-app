import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  Service,
  ServiceSection,
} from '../../../../core/interfaces/service.interface';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {
  @Input() public service: Service;
  @Output() public sectionSelected = new EventEmitter<ServiceSection>();
  constructor() {}

  ngOnInit(): void {}

  public selectSection(section: ServiceSection): void {
    this.sectionSelected.emit(section);
  }
}
