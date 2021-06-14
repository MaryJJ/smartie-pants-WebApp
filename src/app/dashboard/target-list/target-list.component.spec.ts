import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/@core';
import { SharedModule } from '@app/@shared/shared.module';
import { MaterialModule } from '@app/material.module';

import { TargetListComponent } from './target-list.component';

describe('TargetListComponent', () => {
  let component: TargetListComponent;
  let fixture: ComponentFixture<TargetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TargetListComponent],
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
    fixture = TestBed.createComponent(TargetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
