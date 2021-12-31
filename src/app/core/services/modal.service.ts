import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalData } from '../interfaces/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isModalOpened: boolean = false;
  public modalData: any;
  public modalDataChanged = new Subject<ModalData>();
  constructor() {}

  public getModalData(): Observable<ModalData> {
    return this.modalDataChanged;
  }

  public openModal(data: any) {
    this.isModalOpened = true;
    this.modalData = data;
    console.log('openModal');
    this.modalDataChanged.next({
      isModalOpened: this.isModalOpened,
      data: this.modalData,
    });
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
