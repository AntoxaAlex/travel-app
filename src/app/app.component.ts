import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from './app.service';
import { GridSize } from './core/interfaces/grid-size.interface';
import { Service } from './core/interfaces/service.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public pageSize: string;
  public gridSize: GridSize;
  public sizeSubscription: Subscription;
  public serviceSubscription: Subscription;
  public services: Service[];
  public selectedService: Service;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.sizeSubscription = this.appService.getSize().subscribe((data) => {
      for (const query of Object.keys(data.breakpoints)) {
        if (data.breakpoints[query]) {
          const value = this.appService.displayNameMap.get(query)!;
          this.pageSize = value;
          this.gridSize = this.appService.getGridSizes(this.pageSize);
        }
      }
    });
    this.serviceSubscription = this.appService
      .getServices()
      .subscribe((services: Service[]) => {
        this.services = services;
      });
  }

  ngOnDestroy() {
    this.sizeSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }

  public selectService(service: Service): void {
    this.selectedService = service;
  }
}
