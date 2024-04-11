import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInfoComponent } from './pay-info.component';

describe('PayInfoComponent', () => {
  let component: PayInfoComponent;
  let fixture: ComponentFixture<PayInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayInfoComponent]
    });
    fixture = TestBed.createComponent(PayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
