/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrandLearningComponent } from './strand-learning.component';

describe('StrandLearningComponent', () => {
  let component: StrandLearningComponent;
  let fixture: ComponentFixture<StrandLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrandLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrandLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
