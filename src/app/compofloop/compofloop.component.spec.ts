import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompofloopComponent } from './compofloop.component';

describe('CompofloopComponent', () => {
  let component: CompofloopComponent;
  let fixture: ComponentFixture<CompofloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompofloopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompofloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
