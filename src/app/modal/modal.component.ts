import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlightDetail } from '../core/interfaces/flights-table.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public displayedColumns: string[] = [
    'num',
    'carrier',
    'airports',
    'price',
    'duration',
  ];
  public tableData: FlightDetail[] = [];
  public midDuration: number;
  @Input() public modalData: any;
  @Output() public modalClosed = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.modalData =
      this.modalData.getAirFlightRoundTrip.results.air_search_rsp.total_trip_summary;
    this.midDuration =
      (this.modalData.minDuration + this.modalData.maxDuration) / 2;
    if (this.modalData.carrier) {
      const newFlightData = [...this.tableData];
      this.modalData.carrier.map((carrier: any, index: number) => {
        newFlightData.push({
          num: index,
          carrier: carrier.code,
          airports: `${carrier.airport[0].origAirport}, ${carrier.airport[0].destAirport}`,
          price: `${carrier.airport[0].stops[0].lowestTotalFare}USD`,
          duration: this.midDuration,
        });
      });
      this.tableData = newFlightData;
      console.log(this.tableData);
    }
    console.log(this.modalData);
  }

  public closeModal(): void {
    this.modalClosed.emit();
  }
}
