import { AbstractControl } from '@angular/forms';
export function passwordMatchValidator(control: AbstractControl) {
  const password: string = control.get('password').value;
  const passwordConfirm: string = control.get('passwordConfirm').value;
  // compare is the password math
  if (password !== passwordConfirm) {
    // if they don't match, set an error in our passwordConfirm form control
    control.get('passwordConfirm').setErrors({ noPassswordMatch: true });
  }
}
