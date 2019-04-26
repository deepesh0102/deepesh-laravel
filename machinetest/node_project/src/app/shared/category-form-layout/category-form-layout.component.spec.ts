import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormLayoutComponent } from './category-form-layout.component';

describe('CategoryFormLayoutComponent', () => {
  let component: CategoryFormLayoutComponent;
  let fixture: ComponentFixture<CategoryFormLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFormLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
