import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticJobComponent } from './static-job.component';

describe('StaticJobComponent', () => {
  let component: StaticJobComponent;
  let fixture: ComponentFixture<StaticJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
