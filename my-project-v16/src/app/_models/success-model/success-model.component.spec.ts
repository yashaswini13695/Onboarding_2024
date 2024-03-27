import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModelComponent } from './success-model.component';

describe('SuccessModelComponent', () => {
  let component: SuccessModelComponent;
  let fixture: ComponentFixture<SuccessModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessModelComponent]
    });
    fixture = TestBed.createComponent(SuccessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
