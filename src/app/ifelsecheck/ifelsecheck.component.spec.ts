import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsecheckComponent } from './ifelsecheck.component';

describe('IfelsecheckComponent', () => {
  let component: IfelsecheckComponent;
  let fixture: ComponentFixture<IfelsecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelsecheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelsecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
