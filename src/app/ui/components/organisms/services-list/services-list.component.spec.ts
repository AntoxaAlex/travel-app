import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListComponent } from './services-list.component';
import { mockServices } from '../../../../core/mock/mockServices';

describe('ServicesComponent', () => {
  let component: ServicesListComponent;
  let fixture: ComponentFixture<ServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesListComponent);
    component = fixture.componentInstance;
    component.service = mockServices[0]
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should get service', function () {
    expect(component.service).toBe(mockServices[0])
  });

  it('should set service property to attribute', function () {
    const imgsContainer: HTMLElement = fixture.nativeElement
    const imgs = imgsContainer.querySelector('img')!
    expect(imgs.src).toBeTruthy()
  });

});
