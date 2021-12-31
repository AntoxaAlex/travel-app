import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridSize } from '../../core/interfaces/grid-size.interface';
import { AppService } from '../../app.service';
import { Subscription } from 'rxjs';
import {
  Service,
  ServiceSection,
} from '../../core/interfaces/service.interface';
import { ExternalLink } from '../../core/interfaces/external-link.interface';
import { mockExternalLinks } from '../../core/mock/mockExternalLinks';
import { ModalService } from '../../core/services/modal.service';
import { eSizes } from '../../core/enums/sizes.enum';

@Component({
  selector: 'app-travel-services',
  templateUrl: './travel-services.component.html',
  styleUrls: ['./travel-services.component.scss'],
})
export class TravelServicesComponent implements OnInit, OnDestroy {
  public pageSize: string;
  public gridSize: GridSize;
  public sizeSubscription: Subscription;
  public serviceSubscription: Subscription;
  public services: Service[];
  public selectedService: Service;
  public selectedSection: ServiceSection;
  public externalLinks: ExternalLink[] = mockExternalLinks;
  public sizes = eSizes;
  constructor(
    private appService: AppService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.sizeSubscription = this.appService.getSize().subscribe((data) => {
      for (const query of Object.keys(data.breakpoints)) {
        if (data.breakpoints[query]) {
          this.pageSize = this.appService.displayNameMap.get(query)!;
          this.gridSize = this.appService.getGridSizes(this.pageSize);
        }
      }
    });
    this.serviceSubscription = this.appService
      .getServices()
      .subscribe((services: Service[]) => {
        this.services = services;
      });
    this.selectedService = this.services[0];
    this.selectedSection = this.selectedService.serviceSections[0];
  }

  ngOnDestroy() {
    this.sizeSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }

  public selectService(service: Service): void {
    this.selectedService = service;
  }

  public selectSection(section: ServiceSection): void {
    this.selectedSection = section;
    console.log(this.selectedSection);
  }

  public openModal(data: any) {
    this.modalService.openModal(data);
  }
}
