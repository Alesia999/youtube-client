import { FormControl } from '@angular/forms';

export class DateValidator {
  static ptDate(control: FormControl): { [key: string]: any } | null {
    const [year, month, day] = control.value.split('-');
    const date = new Date(+year, +month - 1, +day);
    if (date.getTime() <= Date.now()) {
      return { ptDate: true };
    }

    return null;
  }
}
