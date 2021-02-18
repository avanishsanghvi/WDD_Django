import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainModelsComponent } from './train-models.component';

describe('TrainModelsComponent', () => {
  let component: TrainModelsComponent;
  let fixture: ComponentFixture<TrainModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
