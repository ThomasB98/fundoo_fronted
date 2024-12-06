import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrashComponent } from './display-trash.component';

describe('DisplayTrashComponent', () => {
  let component: DisplayTrashComponent;
  let fixture: ComponentFixture<DisplayTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTrashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
