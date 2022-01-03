import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { ServiceFormType } from '../../../../../core/types/service.type';
import { FlightData } from '../../../../../core/interfaces/flight-data.interface';
import { ServiceSection } from '../../../../../core/interfaces/service.interface';
import { eWays } from '../../../../../core/enums/ways.enum';


@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss'],
})
export class FlightFormComponent {
  public flightForm: FormGroup;
  public isOneWay: boolean = false;
  public fieldRequiredError: string = 'This field is required';
  public invalidDate: string = 'This date is invalid'
  @Input() formData: ServiceFormType;
  @Input() set selectedSection(section: ServiceSection) {
    this.flightForm.patchValue({ to: section.sectionName });
  }
  @Output() formSubmitted = new EventEmitter<FlightData>();

  constructor() {
    this.initForm();
  }

  //Check if form data is valid
  public checkButtonStatus(): boolean {
    return this.flightForm.valid;
  }

  public notEarlyDateValidator = (control: FormControl) => {
    let date = moment(new Date(control.value));
    let now = moment(new Date()).format();
    let duration = moment.duration(date.diff(moment(now)));
    return duration.asMinutes() > 0 ? null : {notEarly: {duration: duration.asMinutes()}}
  }

  public invalidReturnDate = (control: FormControl) => {
    if(this.flightForm){
      let returnDate = moment(new Date(control.value));
      let departDate = this.flightForm.get('departDate')?.value;
      if(departDate){
        departDate = moment(new Date(departDate)).format();
        let duration = moment.duration(returnDate.diff(moment(departDate)));
        return duration.asMinutes() > 0 ? null : {invalidReturn: {duration: duration.asMinutes()}}
      }
    }
    return null
  }

  public notSamePlaces = (control: FormControl) => {
    if(this.flightForm){
      const fromValue = this.flightForm.get('from')?.value;
      return fromValue !== control.value ? null : {invalidTo: {to: control.value}}
    }
    return null
  }

  //Form initialization
  private initForm(): void {
    //Create form group
    this.flightForm = new FormGroup({
      way: new FormControl(eWays.roundTrip),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required, this.notSamePlaces]),
      departDate: new FormControl(null, [Validators.required,this.notEarlyDateValidator]),
      travelClass: new FormControl(''),
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
