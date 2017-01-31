/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrandResearchComponent } from './strand-research.component';

describe('StrandResearchComponent', () => {
  let component: StrandResearchComponent;
  let fixture: ComponentFixture<StrandResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrandResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrandResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
