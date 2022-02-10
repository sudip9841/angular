import { Directive, ElementRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {


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



  @HostListener('keyup') onKeyup()
  {
   
    let engNum = this.ele.nativeElement.value;
    let nepNum = this.changeToNepali(engNum);
    this.ele.nativeElement.parentElement.children[1].innerHTML=nepNum

  }



  constructor(public ele:ElementRef) { 
    
  }

}
