import { DashboardModule } from './../dashboard.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared/shared.module';
import { MaterialModule } from '@app/material.module';

import { PlacementsDialogComponent } from './placements-dialog.component';

describe('PlacementsDialogComponent', () => {
  let component: PlacementsDialogComponent;
  let fixture: ComponentFixture<PlacementsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementsDialogComponent],
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        CoreModule,
        SharedModule,
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
    fixture = TestBed.createComponent(PlacementsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
