import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsDialogComponent } from './placements-dialog.component';

describe('PlacementsDialogComponent', () => {
  let component: PlacementsDialogComponent;
  let fixture: ComponentFixture<PlacementsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementsDialogComponent ]
    })
    .compileComponents();
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
