import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ExpandedContentComponent } from './expanded-content.component';
import { eSizes } from '../../../../../core/enums/sizes.enum';

describe('ExpandedContentComponent', () => {
  let component: ExpandedContentComponent;
  let fixture: ComponentFixture<ExpandedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandedContentComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedContentComponent);
    component = fixture.componentInstance;
    component.pageSize = eSizes.Medium;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle input style', () => {
    component.toggleInputStyle(true);
    fixture.detectChanges();
    expect(component.isSearchInputActive).toBe(true)
  });

  it('should display page size', () => {
    const expendedContainer: HTMLElement = fixture.nativeElement
    const div = expendedContainer.querySelector('.expanded-container')!
    expect(div.classList).toContain(component.pageSize + '-expanded-container')
  });
});
