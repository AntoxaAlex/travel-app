import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLinkComponent } from './custom-link.component';

describe('CustomLinkComponent', () => {
  let component: CustomLinkComponent;
  let fixture: ComponentFixture<CustomLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLinkComponent);
    component = fixture.componentInstance;
    component.text = 'Some text'
    component.color = '#ffffff'
    fixture.detectChanges()
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });

  it('should display text param', () => {
    const linkElement: HTMLElement = fixture.nativeElement;
    const span = linkElement.querySelector('.custom-link')!;
    expect(span.textContent).toEqual('Some text')
  });

  it('should set color attribute', () => {
    const linkElement: HTMLElement = fixture.nativeElement;
    const span = linkElement.querySelector('.custom-link')!;
    expect(span.classList).toContain('#ffffff')
  });
});
