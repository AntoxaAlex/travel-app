import { Component, Input } from '@angular/core';

import {eSizes} from "../../../../core/enums/sizes.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public sizes = eSizes;
  public isContentExpanded: boolean = false;
  @Input() public pageSize: string;

  constructor() {}

  public expandContent(): void {
    this.isContentExpanded = !this.isContentExpanded;
  }
}
