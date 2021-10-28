import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTimelineCardComponent } from './step-timeline-card.component';

describe('StepTimelineCardComponent', () => {
  let component: StepTimelineCardComponent;
  let fixture: ComponentFixture<StepTimelineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTimelineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTimelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
