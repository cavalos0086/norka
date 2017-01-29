/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivzLearningComponent } from './givz-learning.component';

describe('GivzLearningComponent', () => {
  let component: GivzLearningComponent;
  let fixture: ComponentFixture<GivzLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivzLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivzLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
