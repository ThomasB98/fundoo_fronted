import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteinputComponent } from './noteinput.component';

describe('NoteinputComponent', () => {
  let component: NoteinputComponent;
  let fixture: ComponentFixture<NoteinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
