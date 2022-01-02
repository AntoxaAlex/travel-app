import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalData } from '../interfaces/modal';

@Injectable()
export class ModalService {
  public isModalOpened: boolean = false;
  public modalData: any;
  public modalDataChanged = new Subject<ModalData>();
  constructor() {}

  public openModal(data: any) {
    this.isModalOpened = true;
    this.modalData = data;
    this.modalDataChanged.next({isModalOpened: this.isModalOpened,data:this.modalData})
  }
  public closeModal() {
    this.isModalOpened = false;
    this.modalData = null;
    this.modalDataChanged.next({
      isModalOpened: this.isModalOpened,
      data: null,
    });
  }
}
