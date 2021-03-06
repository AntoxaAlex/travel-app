import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from './app.service';
import { GridSize } from './core/interfaces/grid-size.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public pageSize: string;
  public gridSize: GridSize;
  public sizeSubscription: Subscription;

  constructor(
    private appService: AppService,
  ) {}

  ngOnInit() {
    //Create size subscription to get actual page size
    this.sizeSubscription = this.appService.getSizeSubscription()
      .subscribe((query) => {
        this.pageSize = this.appService.displayNameMap.get(query)!;
      });
  }

  ngOnDestroy() {
    //Unsubscribe subscriptions
    this.sizeSubscription.unsubscribe();
  }
}
