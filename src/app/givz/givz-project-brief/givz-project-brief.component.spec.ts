/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivzProjectBriefComponent } from './givz-project-brief.component';

describe('GivzProjectBriefComponent', () => {
  let component: GivzProjectBriefComponent;
  let fixture: ComponentFixture<GivzProjectBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivzProjectBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivzProjectBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
