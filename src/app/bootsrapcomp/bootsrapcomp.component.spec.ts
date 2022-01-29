import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsrapcompComponent } from './bootsrapcomp.component';

describe('BootsrapcompComponent', () => {
  let component: BootsrapcompComponent;
  let fixture: ComponentFixture<BootsrapcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootsrapcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsrapcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
