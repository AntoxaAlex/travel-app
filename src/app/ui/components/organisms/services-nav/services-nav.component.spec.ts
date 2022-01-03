import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { mockServices } from '../../../../core/mock/mockServices';
import { ServicesNavComponent } from './services-nav.component';

describe('ServicesNavComponent', () => {
  let component: ServicesNavComponent;
  let fixture: ComponentFixture<ServicesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesNavComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesNavComponent);
    component = fixture.componentInstance;
    component.services = mockServices;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get services', () => {
    expect(component.services).toBe(mockServices)
  });

});
