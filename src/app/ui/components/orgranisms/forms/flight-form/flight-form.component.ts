import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServiceFormType } from '../../../../../core/types/service.type';
import {
  FlightData,
  FlightDataInterface,
} from '../../../../../core/interfaces/flight-data.interface';
import { ServiceSection } from '../../../../../core/interfaces/service.interface';
import { eWays } from '../../../../../core/enums/ways.enum';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss'],
})
export class FlightFormComponent {
  @Input() formData: ServiceFormType;
  @Input() set selectedSection(section: ServiceSection) {
    this.flightForm.patchValue({ to: section.sectionName });
  }
  @Output() formSubmitted = new EventEmitter<FlightData>();
  public flightForm: FormGroup;
  public isOneWay: boolean = false;
  public fieldRequiredError: string = 'This field is required';

  constructor() {
    this.initForm();
  }
  public checkButtonStatus(): boolean {
    return this.flightForm.valid;
  }

  private initForm(): void {
    this.flightForm = new FormGroup({
      way: new FormControl(eWays.roundTrip),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      departDate: new FormControl(null, [Validators.required]),
      travelClass: new FormControl('', [Validators.required]),
      returnDate: new FormControl(''),
      guests: new FormControl(1, [Validators.required]),
      airlines: new FormControl([]),
      near: new FormControl(false),
    });
  }

  public onSubmit(): void {
    const isValid = this.checkButtonStatus();
    if (isValid) {
      const {
        way,
        from,
        to,
        departDate,
        returnDate,
        guests,
        travelClass,
        airlines,
        near,
      } = this.flightForm.value;
      const flightData = new FlightData(
        way,
        from,
        to,
        departDate.toDateString(),
        returnDate === '' ? '' : returnDate.toDateString(),
        guests,
        travelClass,
        airlines,
        near,
      );
      this.formSubmitted.emit(flightData);
    }
  }
}
