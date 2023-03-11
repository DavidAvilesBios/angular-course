import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentroutenotfoundComponent } from './componentroutenotfound.component';

describe('ComponentroutenotfoundComponent', () => {
  let component: ComponentroutenotfoundComponent;
  let fixture: ComponentFixture<ComponentroutenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentroutenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentroutenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
