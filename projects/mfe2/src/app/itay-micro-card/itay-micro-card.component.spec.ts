import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItayMicroCardComponent } from './itay-micro-card.component';

describe('ItayMicroCardComponent', () => {
  let component: ItayMicroCardComponent;
  let fixture: ComponentFixture<ItayMicroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItayMicroCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItayMicroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
