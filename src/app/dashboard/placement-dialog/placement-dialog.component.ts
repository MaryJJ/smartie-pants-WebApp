import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Placement } from '@app/@core';
import { generate, observe } from 'fast-json-patch';
import { PlacementService } from '../placement.service';

interface DialogData {
  placement: Placement;
}
@Component({
  selector: 'app-placement-dialog',
  templateUrl: './placement-dialog.component.html',
  styleUrls: ['./placement-dialog.component.scss'],
})
export class PlacementDialogComponent implements OnInit {
  placementForm: FormGroup;
  isLoading = false;
  observer: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<PlacementDialogComponent>,
    private formBuilder: FormBuilder,
    private placementService: PlacementService,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    if (this.data.placement) {
      this.observer = observe(this.data.placement);
    }
  }

  save() {
    this.data.placement ? this.update() : this.add();
  }

  add() {
    this.isLoading = true;
    // this.placementService
    //   .addPlacement(this.placementForm.value)
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe(
    //     (data) => {
    //       this.close(data);
    //     },
    //     (error) => {
    //       if (error.error && error.error.detail) {
    //         this.snackBar.open(error.error.detail, '', { duration: 3000 });
    //       } else {
    //         this.snackBar.open('Upps Something go wrong.', '', {
    //           duration: 3000,
    //         });
    //       }
    //     }
    //   );
  }

  update() {
    const patch = generate(this.observer);
    if (patch.length > 0) {
      this.isLoading = true;
      // this.placementService
      //   .updatePlacement(this.data.placement.id, patch)
      //   .pipe(
      //     finalize(() => {
      //       this.isLoading = false;
      //     })
      //   )
      //   .subscribe(
      //     (data) => {
      //       this.close(data);
      //     },
      //     (error) => {
      //       if (error.error && error.error.detail) {
      //         this.snackBar.open(error.error.detail, '', { duration: 3000 });
      //       } else {
      //         this.snackBar.open('Upps Something go wrong.', '', {
      //           duration: 3000,
      //         });
      //       }
      //     }
      //   );
    }
  }

  close(placement: Placement) {
    this.dialogRef.close(placement);
  }

  private createForm() {
    this.placementForm = this.formBuilder.group({
      projectId: [null],
    });
  }
}
