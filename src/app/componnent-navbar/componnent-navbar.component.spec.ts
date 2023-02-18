import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponnentNavbarComponent } from './componnent-navbar.component';

describe('ComponnentNavbarComponent', () => {
  let component: ComponnentNavbarComponent;
  let fixture: ComponentFixture<ComponnentNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponnentNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponnentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
