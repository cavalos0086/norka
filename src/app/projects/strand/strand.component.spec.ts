/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrandComponent } from './strand.component';

describe('StrandComponent', () => {
  let component: StrandComponent;
  let fixture: ComponentFixture<StrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
