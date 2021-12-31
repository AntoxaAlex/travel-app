import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss'],
})
export class CustomLinkComponent implements OnInit {
  @Input() public text: string;
  @Input() public color: string;
  @Output() public linkClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public clickLink(): void {
    this.linkClicked.emit();
  }
}
