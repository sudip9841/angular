import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  @Input() titles:any
  @Input() data:any
  //for adding value
  @Output() val:any = new EventEmitter();

  //for editing value
  @Output() editVal:any = new EventEmitter()

  addable = true;

  updateable = false;

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  uname="";
  uage = 0;

//send value to parent component for adding
passValue()
{
  let value = {name:this.uname,age:this.uage};
    this.val.emit(value);
  }

  //edit button fucntion
  editData(name:any,age:any)
  {
    this.uname = name;
    this.uage = age;
    this.addable = false;
    this.updateable = true;
  }

  //view button function
  viewData(name:any,age:any)
  {
    this.uname = name;
    this.uage = age;
    this.addable = false;
    this.updateable = false;
  }

  // send value to parent component for edit
  editValue()
  {
    let value = {name:this.uname,age:this.uage};
    this.editVal.emit(value)
  }
}
