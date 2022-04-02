import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCardDaletComponent } from './micro-card-dalet.component';

describe('MicroCardDaletComponent', () => {
  let component: MicroCardDaletComponent;
  let fixture: ComponentFixture<MicroCardDaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroCardDaletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroCardDaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
