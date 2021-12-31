import { Component, Input, OnInit } from '@angular/core';

import { ExternalLink } from '../core/interfaces/external-link.interface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  @Input() public links: ExternalLink[];
  constructor() {}

  ngOnInit(): void {}
}
