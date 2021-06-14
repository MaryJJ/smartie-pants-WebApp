import { DashboardModule } from './../dashboard.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementDialogComponent } from './placement-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/@core';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/@shared/shared.module';

describe('PlacementDialogComponent', () => {
  let component: PlacementDialogComponent;
  let fixture: ComponentFixture<PlacementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementDialogComponent],
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        CoreModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        DashboardModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
