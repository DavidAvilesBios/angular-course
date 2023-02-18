import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponnentTableComponent } from './componnent-table.component';

describe('ComponnentTableComponent', () => {
  let component: ComponnentTableComponent;
  let fixture: ComponentFixture<ComponnentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponnentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponnentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
