import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  changeToNepali(num:number) {
    let nepNumObj = {'0': 'o', '1': '१', '2': '२', '3': '३', '4': '४', '5': '५', '6': '६', '7': '७', '8': '८', '9': '९' }
  
    let nepNum= ""
    let arr_num = num.toString().split('')
    for (let an in arr_num) {
      let k: keyof typeof nepNumObj;
        for (k in nepNumObj) {
            if (k == arr_num[an]) {
                nepNum +=  nepNumObj[k];
            }
        }
    }

    return nepNum;

}


  nepaliNum:string=""

  transform(value: number, ...args: unknown[]): string {
    this.nepaliNum = this.changeToNepali(value)
    return this.nepaliNum;
  }

}
