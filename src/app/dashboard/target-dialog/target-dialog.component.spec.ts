import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared/shared.module';
import { MaterialModule } from '@app/material.module';

import { TargetDialogComponent } from './target-dialog.component';

describe('TargetDialogComponent', () => {
  let component: TargetDialogComponent;
  let fixture: ComponentFixture<TargetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TargetDialogComponent],
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        CoreModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
