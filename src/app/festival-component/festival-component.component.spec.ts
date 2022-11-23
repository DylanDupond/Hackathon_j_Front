import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalComponentComponent } from './festival-component.component';

describe('FestivalComponentComponent', () => {
  let component: FestivalComponentComponent;
  let fixture: ComponentFixture<FestivalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
