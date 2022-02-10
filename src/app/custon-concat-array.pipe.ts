import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custonConcatArray'
})
export class CustonConcatArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
