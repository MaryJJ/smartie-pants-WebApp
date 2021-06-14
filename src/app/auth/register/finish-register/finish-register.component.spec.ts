import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishRegisterComponent } from './finish-register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared/shared.module';

describe('FinishRegisterComponent', () => {
  let component: FinishRegisterComponent;
  let fixture: ComponentFixture<FinishRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        RouterTestingModule,
        ReactiveFormsModule,
        CoreModule,
      ],
      declarations: [FinishRegisterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
