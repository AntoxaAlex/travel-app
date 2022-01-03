import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GridSize } from '../../core/interfaces/grid-size.interface';
import { AppService } from '../../app.service';
import { Service, ServiceSection } from '../../core/interfaces/service.interface';
import { ExternalLink } from '../../core/interfaces/external-link.interface';
import { mockExternalLinks } from '../../core/mock/mockExternalLinks';
import { ModalService } from '../../core/services/modal.service';
import { eSizes } from '../../core/enums/sizes.enum';
import { ModalData } from '../../core/interfaces/modal';

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
  public isModalOpened: boolean = false;
  public modalData: any;
  public modalSubscription: Subscription;

  constructor(
    private appService: AppService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    //Create size subscription to get actual page size
    this.sizeSubscription = this.appService.getSizeSubscription()
      .subscribe((query) => {
        this.pageSize = this.appService.displayNameMap.get(query)!;
        this.gridSize = this.appService.getGridSizes(this.pageSize);
      });
    //Create modal subscription to get actual modal data
    this.modalSubscription = this.modalService.modalDataChanged.subscribe((modalData: ModalData) => {
      this.isModalOpened = modalData.isModalOpened;
      this.modalData = modalData.data;
    });
    //Create service subscription to get actual travel service
    this.serviceSubscription = this.appService
      .getServices()
      .subscribe((services: Service[]) => {
        this.services = services;
      });
    //Set default selected travel service as first service in the array of travel services
    this.selectedService = this.services[0];
    //Set default selected section of selected travel service as first section in the array
    this.selectedSection = this.selectedService.serviceSections[0];
  }

  ngOnDestroy() {
    //Unsubscribe subscriptions
    this.sizeSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
    this.modalSubscription.unsubscribe()
  }

  public selectService(service: Service): void {
    this.selectedService = service;
  }

  public selectSection(section: ServiceSection): void {
    this.selectedSection = section;
  }

  public openModal(data: any) {
    this.modalService.openModal(data);
  }
  public closeModal() {
    this.modalService.closeModal();
  }
}
