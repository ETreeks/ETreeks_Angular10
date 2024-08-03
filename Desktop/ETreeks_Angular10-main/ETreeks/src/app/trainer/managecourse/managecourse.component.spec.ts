import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecourseComponent } from './managecourse.component';

describe('ManagecourseComponent', () => {
  let component: ManagecourseComponent;
  let fixture: ComponentFixture<ManagecourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagecourseComponent]
    });
    fixture = TestBed.createComponent(ManagecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
