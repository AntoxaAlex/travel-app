import {  TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TravelServicesComponent } from './travel-services.component';
import { AppService } from '../../app.service';
import { ModalService } from '../../core/services/modal.service';
import { eSizes } from '../../core/enums/sizes.enum';
import { mockGridSizes } from '../../core/mock/mockGridSizes';
import { mockServices } from '../../core/mock/mockServices';
import { Service, ServiceSection } from '../../core/interfaces/service.interface';
import { ModalData } from '../../core/interfaces/modal';

describe('TravelServicesComponent', () => {
  let component: TravelServicesComponent;
  const section: ServiceSection = {
    sectionName: 'Rome',
    imagePath: 'image/path',
    text: 'Some text'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        TravelServicesComponent,
        {
          provide: AppService
        },
        {
          provide: ModalService
        }
      ],
    })
  });

  beforeEach(() => {
    component = TestBed.inject(TravelServicesComponent)
    component.sizeSubscription = of(eSizes.Medium).subscribe((size: string) => {
      component.pageSize = size
      component.gridSize = mockGridSizes[eSizes.Medium]
    })
    component.serviceSubscription = of(mockServices).subscribe((services: Service[]) => {
      component.services = services
    })
    component.modalSubscription = of({isModalOpened: true, data: 'Modal Data'}).subscribe((data: ModalData) => {
      component.isModalOpened = data.isModalOpened;
      component.modalData = data.data
    })
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should get page size',  () => {
    expect(component.pageSize).toBe(eSizes.Medium)
  });

  it('should get grid sizes',  () => {
    expect(component.gridSize).toBe(mockGridSizes[eSizes.Medium])
  });

  it('should get travel services',  () => {
    expect(component.services).toBe(mockServices)
  });

  it('should get modal data',  () => {
    expect(component.modalData).toBe('Modal Data')
    expect(component.isModalOpened).toBe(true)
  });

  it('should select service',  () => {
    component.selectService(mockServices[0]);
    expect(component.selectedService).toBe(mockServices[0])
  });

  it('should select section',  () => {
    component.selectSection(section);
    expect(component.selectedSection).toEqual({
      sectionName: 'Rome',
      imagePath: 'image/path',
      text: 'Some text'
    })
  });


});
