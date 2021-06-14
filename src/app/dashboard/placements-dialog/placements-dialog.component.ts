import { patternValidator } from '@app/@shared/directives/pattern-validator.directive';
import { finalize } from 'rxjs/operators';
import { PlacementDialogComponent } from './../placement-dialog/placement-dialog.component';
import { smartiePantsAnimations } from './../../@shared/animations/index';
import { Placement } from '@app/@core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlacementService } from './../placement.service';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

interface DialogData {
  create: boolean;
}
@Component({
  selector: 'app-placements-dialog',
  templateUrl: './placements-dialog.component.html',
  styleUrls: ['./placements-dialog.component.scss'],
  animations: smartiePantsAnimations,
})
export class PlacementsDialogComponent implements OnInit {
  stores = ['apple', 'google'];
  placementsForm: FormGroup;
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<PlacementsDialogComponent>,
    private formBuilder: FormBuilder,
    private placementDialog: MatDialog,
    private placementService: PlacementService,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  save() {
    this.data.create ? this.createPlacements() : this.updatePlacements();
  }

  close(placements: Placement[]) {
    this.dialogRef.close(placements);
  }

  addPlacement() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      placement: null,
    };
    dialogConfig.width = '400px';
    const dialogRef = this.placementDialog.open(
      PlacementDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.placementsForm.controls.placements.setValue([
          ...this.placementsForm.controls.placements.value,
          result,
        ]);
      }
    });
  }

  private createPlacements() {
    this.isLoading = true;
    this.placementService
      .createPlacements(this.placementsForm.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (data) => {
          this.close(data);
        },
        (error) => {
          this.snackBar.open(error, '', {
            duration: 4000,
          });
        }
      );
  }

  private updatePlacements() {
    this.placementService
      .updatePlacements(this.placementsForm.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (data) => {
          this.close(data);
        },
        (error) => {
          this.snackBar.open(error, '', {
            duration: 4000,
          });
        }
      );
  }

  private createForm() {
    this.placementsForm = this.formBuilder.group({
      projectId: [
        '',
        [
          Validators.required,
          patternValidator(
            /^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/,
            { guidValidator: true }
          ),
        ],
      ],
      storeName: [this.stores[0], [Validators.required]],
      adUnitId: ['', [Validators.required]],
      dryrun: [null],
      placements: [[], [Validators.required, Validators.minLength(1)]],
    });
  }
}
