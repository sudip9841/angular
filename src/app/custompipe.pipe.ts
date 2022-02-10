import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {


  val1:string="";
  val2:string="";
  transform(value: string, value2: string, ...args: unknown[]): unknown {
    this.val1 = value.split('').reverse().join('')
    this.val2 = value2.split('').reverse().join('')


    return `${this.val1}  ${this.val2}`;
  }

}
