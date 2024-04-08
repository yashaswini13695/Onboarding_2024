import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsInfoComponent } from './documents-info.component';

describe('DocumentsInfoComponent', () => {
  let component: DocumentsInfoComponent;
  let fixture: ComponentFixture<DocumentsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsInfoComponent]
    });
    fixture = TestBed.createComponent(DocumentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
