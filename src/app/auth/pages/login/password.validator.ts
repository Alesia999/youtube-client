import { FormControl } from '@angular/forms';

export class PasswordValidator {
  static minLength(control: FormControl): { [key: string]: boolean } | null {
    if (control.value.length < 8) {
      return {
        minLength: true,
      };
    }
    return null;
  }

  static upperCase(control: FormControl): { [key: string]: boolean } | null {
    if (!/[a-z]/.test(control.value) || !/[A-Z]/.test(control.value)) {
      return {
        upperCase: true,
      };
    }
    return null;
  }

  static numbers(control: FormControl): { [key: string]: boolean } | null {
    if (!/[0-9]/.test(control.value)) {
      return {
        numbers: true,
      };
    }
    return null;
  }

  static specialCharacter(control: FormControl): { [key: string]: boolean } | null {
   if (!/[!@#$%^&*]/.test(control.value)) {
     return {
      specialCharacter: true,
     };
   }
   return null;
 }
}
