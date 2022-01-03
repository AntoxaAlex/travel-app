import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NgZone, PLATFORM_ID } from '@angular/core';

import { AppService } from './app.service';
import { eSizes } from './core/enums/sizes.enum';
import { mockGridSizes } from './core/mock/mockGridSizes';
import { Service } from './core/interfaces/service.interface';
import { mockServices } from './core/mock/mockServices';

describe('AppService',() => {
  let service: AppService;
  const pageSize = eSizes.Medium;
  const departDate = new Date('January 7, 2022').toDateString()
  const returnDate = new Date('January 17, 2022').toDateString()

  beforeEach(() => {
    const platform = new Platform(PLATFORM_ID)
    const zone = new NgZone({})
    const mediaMatcher = new MediaMatcher(platform)
    const breakPointObserver = new BreakpointObserver(mediaMatcher,zone)
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AppService(breakPointObserver,httpClientSpy);
  });

  it('should exist',() => {
    expect(service).toBeTruthy()
  })

  it('should return observables of breakpoint state',  () => {
    service.getSize().subscribe((state: BreakpointState) => {
      expect(state).toBeTruthy()
    })
  });

  it('should return grid sizes for specific screen size',  () => {
    const gridSize = service.getGridSizes(pageSize);
    expect(gridSize).toBe(mockGridSizes.Medium);
  });

  it('should return observable of travel services', () => {
    service.getServices().subscribe((services: Service[]) => {
      expect(services).toBe(mockServices)
    })
  });

  it('should set duration string', () => {
    const duration = service.setDuration(departDate,returnDate);
    expect(duration).toBe('240 hours')
  });



})
