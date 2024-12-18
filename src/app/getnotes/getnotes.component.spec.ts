import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnotesComponent } from './getnotes.component';

describe('GetnotesComponent', () => {
  let component: GetnotesComponent;
  let fixture: ComponentFixture<GetnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetnotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
