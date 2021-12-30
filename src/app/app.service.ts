import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable, of, Subject } from 'rxjs';

import { GridSize } from './core/interfaces/grid-size.interface';
import { mockGridSizes } from './core/mock/mockGridSizes';
import { Service } from './core/interfaces/service.interface';
import { mockServices } from './core/mock/mockServices';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public pageSize = new Subject<string>();
  public displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakPointObserver: BreakpointObserver) {}

  public getSize(): Observable<BreakpointState> {
    return this.breakPointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);
  }

  public setSize(size: string): void {
    this.pageSize.next(size);
  }

  public getGridSizes(size: string): GridSize {
    const sizes: any = { ...mockGridSizes };
    return sizes[size];
  }

  public getServices(): Observable<Service[]> {
    return of(mockServices);
  }
}
