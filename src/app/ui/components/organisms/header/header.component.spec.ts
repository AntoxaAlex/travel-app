import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

import { eSizes } from '../../../../core/enums/sizes.enum';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand content',  () => {
    component.expandContent();
    expect(component.isContentExpanded).toBe(true)
  });

  it('should get size', () => {
    component.pageSize = eSizes.Medium;
    fixture.detectChanges();
    expect(component.pageSize).toBe(eSizes.Medium)
  });
});
