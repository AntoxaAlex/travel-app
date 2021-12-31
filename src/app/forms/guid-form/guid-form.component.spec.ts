import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidFormComponent } from './guid-form.component';

describe('GuidFormComponent', () => {
  let component: GuidFormComponent;
  let fixture: ComponentFixture<GuidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
