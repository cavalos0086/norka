/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PomowebComponent } from './pomoweb.component';

describe('PomowebComponent', () => {
  let component: PomowebComponent;
  let fixture: ComponentFixture<PomowebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomowebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
