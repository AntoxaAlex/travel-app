import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss'],
})
export class CustomLinkComponent {
  @Input() public text: string;
  @Input() public color: string;
  @Output() public linkClicked = new EventEmitter();

  constructor() {}

  public linkClick(): void {
    this.linkClicked.emit();
  }
}
