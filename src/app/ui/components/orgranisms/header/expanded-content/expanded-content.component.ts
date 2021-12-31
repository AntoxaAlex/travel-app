import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanded-content',
  templateUrl: './expanded-content.component.html',
  styleUrls: ['./expanded-content.component.scss'],
})
export class ExpandedContentComponent implements OnInit {
  public isSearchInputActive: boolean = false;
  @Input() public pageSize: string;
  constructor() {}

  ngOnInit(): void {}

  public toggleInputStyle(isActive: boolean): void {
    this.isSearchInputActive = isActive;
  }
}
