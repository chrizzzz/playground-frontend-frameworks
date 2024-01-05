import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecylceComponent } from './lifecylce.component';

describe('LifecylceComponent', () => {
  let component: LifecylceComponent;
  let fixture: ComponentFixture<LifecylceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecylceComponent]
    });
    fixture = TestBed.createComponent(LifecylceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
