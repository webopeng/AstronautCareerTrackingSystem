import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDutyManager } from './astronaut-duty-manager';

describe('AstronautDutyManager', () => {
  let component: AstronautDutyManager;
  let fixture: ComponentFixture<AstronautDutyManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautDutyManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautDutyManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
