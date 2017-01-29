/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivzDesignComponent } from './givz-design.component';

describe('GivzDesignComponent', () => {
  let component: GivzDesignComponent;
  let fixture: ComponentFixture<GivzDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivzDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivzDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
