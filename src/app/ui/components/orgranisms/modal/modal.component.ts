import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FlightDetail } from '../../../../core/interfaces/flights-table.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public displayedColumns: string[] = [
    'carrier',
    'from',
    'to',
    'price',
    'duration'
  ];
  @Input() public tableData: FlightDetail[];
  @Output() public modalClosed = new EventEmitter();

  constructor() {}


  public closeModal(): void {
    this.modalClosed.emit();
  }
}
