import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from './app.service';
import { GridSize } from './core/interfaces/grid-size.interface';
import { ModalService } from './core/services/modal.service';
import { ModalData } from './core/interfaces/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public pageSize: string;
  public gridSize: GridSize;
  public isModalOpened: boolean = false;
  public modalData: any;
  private sizeSubscription: Subscription;
  private modalSubscription: Subscription;
  constructor(
    private appService: AppService,
    private modalService: ModalService,
  ) {}
  ngOnInit() {
    this.sizeSubscription = this.appService.getSize().subscribe((data) => {
      for (const query of Object.keys(data.breakpoints)) {
        if (data.breakpoints[query]) {
          this.pageSize = this.appService.displayNameMap.get(query)!;
          this.gridSize = this.appService.getGridSizes(this.pageSize);
        }
      }
    });
    this.modalService.getModalData().subscribe((modalData: ModalData) => {
      this.isModalOpened = modalData.isModalOpened;
      console.log(this.isModalOpened);
      this.modalData = modalData.data;
    });
  }

  ngOnDestroy() {
    this.sizeSubscription.unsubscribe();
    this.modalSubscription.unsubscribe();
  }

  public closeModal() {
    this.modalService.closeModal();
  }
}
