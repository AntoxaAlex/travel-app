import { Component, Input } from '@angular/core';

import { ExternalLink } from '../../../../core/interfaces/external-link.interface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  @Input() public links: ExternalLink[];

  constructor() {}
}
