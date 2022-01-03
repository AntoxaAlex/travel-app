import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expanded-content',
  templateUrl: './expanded-content.component.html',
  styleUrls: ['./expanded-content.component.scss'],
})
export class ExpandedContentComponent {
  public isSearchInputActive: boolean = false;
  @Input() public pageSize: string;

  constructor() {}

  public toggleInputStyle(isActive: boolean): void {
    this.isSearchInputActive = isActive;
  }
}
