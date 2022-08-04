import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @Input() backgroundColor: string = 'blue';
  @HostBinding('style.backgroundColor') bgColor!: string;

  ngOnInit() {
    this.bgColor = this.backgroundColor;
  }
}
