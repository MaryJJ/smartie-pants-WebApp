import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { COUNTRY_CODES, Target } from '@app/@core';
import { distinctUntilChanged } from 'rxjs/operators';

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

  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {
    this.createForm();
    this.listenChanges();
  }

  ngOnInit(): void {}

  save() {
    this.submitTarget.next(this.targetForm.value);
    this.targetForm.reset({ type: this.targetTypes[0] });
  }

  private listenChanges() {
    this.targetForm.controls.type.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        if (value === 'ecpmTarget') {
          this.targetForm.controls.countryCodes.setValidators([
            Validators.required,
          ]);
          this.targetForm.controls.global.clearValidators();
          this.targetForm.controls.global.reset();
        } else {
          this.targetForm.controls.global.setValidators([Validators.required]);
          this.targetForm.controls.countryCodes.clearValidators();
          this.targetForm.controls.countryCodes.reset();
        }
        this.cdRef.detectChanges();
      });
  }

  private createForm() {
    this.targetForm = this.formBuilder.group({
      value: ['', [Validators.required]],
      type: [this.targetTypes[0], [Validators.required]],
      countryCodes: [null, [Validators.required]],
      global: [null],
    });
  }
}
