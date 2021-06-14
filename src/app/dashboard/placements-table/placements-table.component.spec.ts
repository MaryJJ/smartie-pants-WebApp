import { DashboardModule } from './../dashboard.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared/shared.module';
import { MaterialModule } from '@app/material.module';

import { PlacementsTableComponent } from './placements-table.component';

describe('PlacementsTableComponent', () => {
  let component: PlacementsTableComponent;
  let fixture: ComponentFixture<PlacementsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementsTableComponent],
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
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
