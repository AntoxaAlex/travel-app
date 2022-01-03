import { TestBed } from '@angular/core/testing';
import { Breakpoints } from '@angular/cdk/layout';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { eSizes } from './core/enums/sizes.enum';

class MockAppService{
  displayNameMap = new Map([
    [Breakpoints.XSmall, eSizes.XSmall],
    [Breakpoints.Small, eSizes.Small],
    [Breakpoints.Medium, eSizes.Medium],
    [Breakpoints.Large, eSizes.Large],
    [Breakpoints.XLarge, eSizes.XLarge],
  ]);
}

describe('AppComponent', () => {
  let component: AppComponent

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [AppComponent,{
        provide: AppService,
        useClass: MockAppService
      }]
    })
    component = TestBed.inject(AppComponent)
    component.sizeSubscription = of(eSizes.Medium).subscribe((size: string) => {
      component.pageSize = size
    })
  });

  it('should exist', () => {
    expect(component).toBeTruthy()
  });

  it('should get page size', function () {
    expect(component.pageSize).toBeTruthy();
    expect(component.pageSize).toBe(eSizes.Medium);
  });

});
