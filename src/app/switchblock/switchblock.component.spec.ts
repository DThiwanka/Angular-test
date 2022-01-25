import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchblockComponent } from './switchblock.component';

describe('SwitchblockComponent', () => {
  let component: SwitchblockComponent;
  let fixture: ComponentFixture<SwitchblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
