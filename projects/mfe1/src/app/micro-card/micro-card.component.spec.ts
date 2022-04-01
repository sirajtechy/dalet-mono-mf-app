import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCardComponent } from './micro-card.component';

describe('MicroCardComponent', () => {
  let component: MicroCardComponent;
  let fixture: ComponentFixture<MicroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
