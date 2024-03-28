import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticleBarGraphComponent } from './verticle-bar-graph.component';

describe('VerticleBarGraphComponent', () => {
  let component: VerticleBarGraphComponent;
  let fixture: ComponentFixture<VerticleBarGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticleBarGraphComponent]
    });
    fixture = TestBed.createComponent(VerticleBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
