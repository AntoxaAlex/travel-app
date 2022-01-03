import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightDetail } from '../../../../core/interfaces/flights-table.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ModalComponent } from './modal.component';

const tableData: FlightDetail[] = [
  {
    num: 0,
    from: 'from',
    to: 'to',
    duration: '0 hours',
    price: '1$',
    carrier: 'ASA'
  },
  {
    num: 0,
    from: 'from',
    to: 'to',
    duration: '0 hours',
    price: '1$',
    carrier: 'ASA'
  },
]

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.tableData = tableData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get flight data', function () {
    expect(component.tableData).toBe(tableData)
  });
});
