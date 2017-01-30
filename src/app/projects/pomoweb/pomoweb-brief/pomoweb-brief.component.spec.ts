/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PomowebBriefComponent } from './pomoweb-brief.component';

describe('PomowebBriefComponent', () => {
  let component: PomowebBriefComponent;
  let fixture: ComponentFixture<PomowebBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomowebBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomowebBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
