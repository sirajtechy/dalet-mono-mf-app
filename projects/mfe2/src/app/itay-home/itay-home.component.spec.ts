import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItayHomeComponent } from './itay-home.component';

describe('ItayHomeComponent', () => {
  let component: ItayHomeComponent;
  let fixture: ComponentFixture<ItayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItayHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
