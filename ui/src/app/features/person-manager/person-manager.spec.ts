import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonManager } from './person-manager';

describe('PersonManager', () => {
  let component: PersonManager;
  let fixture: ComponentFixture<PersonManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
