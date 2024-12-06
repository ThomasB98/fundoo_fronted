import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiconsComponent } from './appicons.component';

describe('AppiconsComponent', () => {

  let component: AppiconsComponent;
  let fixture: ComponentFixture<AppiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppiconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});

