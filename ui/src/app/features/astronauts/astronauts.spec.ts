import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Astronauts } from './astronauts';

describe('Astronauts', () => {
  let component: Astronauts;
  let fixture: ComponentFixture<Astronauts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Astronauts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Astronauts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
