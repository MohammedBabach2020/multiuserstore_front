import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ControlsConfirmationValidator(originalControl: FormControl, matchControl: FormControl): ValidatorFn {

  return (): ValidationErrors | null => {
    const value1 = originalControl.value;
    const value2 = matchControl.value;

    if (value1 !== value2) {
      matchControl.setErrors({ notMatching: true });
      return { notMatching: true };
    } else {
      matchControl.setErrors(null);
      return null;
    }
  };
}
