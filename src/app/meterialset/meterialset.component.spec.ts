import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialsetComponent } from './meterialset.component';

describe('MeterialsetComponent', () => {
  let component: MeterialsetComponent;
  let fixture: ComponentFixture<MeterialsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterialsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
