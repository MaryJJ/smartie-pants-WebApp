import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Placement, Target } from '@app/@core';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<PlacementDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  save() {
    this.data.placement ? this.edit() : this.add();
  }

  add() {
    this.close(this.placementForm.value);
  }

  edit() {}

  addTarget(target: Target) {
    this.placementForm.controls.targets.setValue([
      ...this.placementForm.controls.targets.value,
      target,
    ]);
  }

  close(placement: Placement) {
    this.dialogRef.close(placement);
  }

  private createForm() {
    this.placementForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      targets: [[], [Validators.required, Validators.minLength(1)]],
    });
  }
}
