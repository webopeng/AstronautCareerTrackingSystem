import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDetail } from './astronaut-detail';

describe('AstronautDetail', () => {
  let component: AstronautDetail;
  let fixture: ComponentFixture<AstronautDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
