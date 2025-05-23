import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo1Component } from './todo2.component';

describe('Todo1Component', () => {
  let component: Todo1Component;
  let fixture: ComponentFixture<Todo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Todo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
