/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrandBriefComponent } from './strand-brief.component';

describe('StrandBriefComponent', () => {
  let component: StrandBriefComponent;
  let fixture: ComponentFixture<StrandBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrandBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrandBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
