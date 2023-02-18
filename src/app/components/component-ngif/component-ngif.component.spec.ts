import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgifComponent } from './component-ngif.component';

describe('ComponentNgifComponent', () => {
  let component: ComponentNgifComponent;
  let fixture: ComponentFixture<ComponentNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
