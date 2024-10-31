import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedAnimationComponent } from './typed-animation.component';

describe('TypedAnimationComponent', () => {
  let component: TypedAnimationComponent;
  let fixture: ComponentFixture<TypedAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
