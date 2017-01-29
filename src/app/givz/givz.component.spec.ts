/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivzComponent } from './givz.component';

describe('GivzComponent', () => {
  let component: GivzComponent;
  let fixture: ComponentFixture<GivzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
