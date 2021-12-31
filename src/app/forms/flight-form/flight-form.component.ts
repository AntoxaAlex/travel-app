import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {FormControl, Validators } from '@angular/forms';

import { ServiceFormType } from '../../core/types/service.type';
import { FlightData } from '../../core/interfaces/flight-data.interface';
import { ServiceSection } from '../../core/interfaces/service.interface';
import {eWays} from "../../core/enums/ways.enum";

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss'],
})
export class FlightFormComponent implements OnChanges, OnInit {
  @Input() formData: ServiceFormType;
  @Input() selectedSection: ServiceSection;
  @Output() formSubmitted = new EventEmitter<FlightData>();
  public isOneWay: boolean = false;
  public flightData: FlightData = {
    way: '',
    from: '',
    to: '',
    depart: null,
    return: null,
    guests: 0,
    travelClass: '',
    airlines: [],
    near: false,
  };

  public wayControl: FormControl;
  public fromControl: FormControl;
  public toControl: FormControl;
  public departControl: FormControl;
  public returnControl: FormControl;
  public guestsControl: FormControl;
  public classControl: FormControl;
  public airlinesControl: FormControl;
  public nearControl: FormControl;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.toControl = new FormControl(this.selectedSection.sectionName, [
      Validators.required,
    ]);
  }

  ngOnInit(): void {
    this.wayControl = new FormControl(eWays.roundTrip);
    this.fromControl = new FormControl('', [Validators.required]);
    this.toControl = new FormControl(this.selectedSection.sectionName, [
      Validators.required,
    ]);
    this.departControl = new FormControl('', [Validators.required]);
    this.returnControl = new FormControl('');
    this.guestsControl = new FormControl(1);
    this.classControl = new FormControl('', [Validators.required]);
    this.airlinesControl = new FormControl([]);
    this.nearControl = new FormControl(false);
  }

  public getErrorMessage(reason?: string): string {
    if (reason) return reason;
    return 'This is field is required';
  }

  public checkButtonStatus(): boolean {
    return (
      this.wayControl.value === eWays.roundTrip &&
      !this.returnControl.invalid &&
      !this.fromControl.invalid &&
      !this.toControl.invalid &&
      !this.departControl.invalid &&
      !this.classControl.invalid
    );
  }

  public onSubmit(): void {
    const isValid = this.checkButtonStatus();
    if (isValid) {
      this.flightData.way = this.wayControl.value;
      this.flightData.from = this.fromControl.value;
      this.flightData.to = this.toControl.value;
      this.flightData.depart = this.departControl.value;
      this.flightData.return = this.returnControl.value;
      this.flightData.guests = this.guestsControl.value;
      this.flightData.travelClass = this.classControl.value;
      this.flightData.airlines = this.airlinesControl.value;
      this.flightData.near = this.nearControl.value;

      this.formSubmitted.emit(this.flightData);
    }
  }
}
