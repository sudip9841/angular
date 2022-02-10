import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @HostBinding('style.color') color="red";
  // @HostBinding('style.color') c="pink"

  @ViewChild('nepNumber') nepnumber!:ElementRef;


  ngAfterViewInit()
  {
    console.log(this.nepnumber.nativeElement.children[0].innerHTML="hello hiiii")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
