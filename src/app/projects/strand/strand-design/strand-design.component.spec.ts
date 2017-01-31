/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrandDesignComponent } from './strand-design.component';

describe('StrandDesignComponent', () => {
  let component: StrandDesignComponent;
  let fixture: ComponentFixture<StrandDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrandDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrandDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
