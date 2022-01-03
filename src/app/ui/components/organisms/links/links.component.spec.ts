import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalLink } from '../../../../core/interfaces/external-link.interface';

import { LinksComponent } from './links.component';

const externalLinks: ExternalLink[] = [
  {
    href: 'href',
    icon: 'icon',
    name: 'name'
  },
  {
    href: 'href',
    icon: 'icon',
    name: 'name'
  },
  {
    href: 'href',
    icon: 'icon',
    name: 'name'
  },
]

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    component.links = externalLinks;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });


});
