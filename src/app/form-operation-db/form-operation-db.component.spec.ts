import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperationDBComponent } from './form-operation-db.component';

describe('FormOperationDBComponent', () => {
  let component: FormOperationDBComponent;
  let fixture: ComponentFixture<FormOperationDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOperationDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOperationDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
