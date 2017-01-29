/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivzResearchComponent } from './givz-research.component';

describe('GivzResearchComponent', () => {
  let component: GivzResearchComponent;
  let fixture: ComponentFixture<GivzResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivzResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivzResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
