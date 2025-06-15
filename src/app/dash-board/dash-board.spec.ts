import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoard } from './dash-board';

describe('DashBoard', () => {
  let component: DashBoard;
  let fixture: ComponentFixture<DashBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
