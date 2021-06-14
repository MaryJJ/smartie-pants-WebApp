import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { COUNTRY_CODES, Target } from '@app/@core';

@Component({
  selector: 'app-target-dialog',
  templateUrl: './target-dialog.component.html',
  styleUrls: ['./target-dialog.component.scss'],
})
export class TargetDialogComponent implements OnInit {
  targetTypes = ['ecpmTarget', 'globalTarget'];
  targetForm: FormGroup;
  countryCodes = COUNTRY_CODES;
  @Output() submitTarget = new EventEmitter<Target>();

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  save() {
    this.submitTarget.next(this.targetForm.value);
    this.targetForm.reset({ type: this.targetTypes[0] });
  }

  private createForm() {
    this.targetForm = this.formBuilder.group({
      value: ['', [Validators.required]],
      type: [this.targetTypes[0], [Validators.required]],
      countryCodes: [null],
      global: [null],
    });
  }
}
