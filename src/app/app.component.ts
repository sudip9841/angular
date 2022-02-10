import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp1';
  
  titles = [{title:"name"},{title:"age"}]

  data = [{name:'ram',age:30},{name:'shyam',age:20}]



  

  addData(val:any)
  {
    // console.log(typeof val);

    this.data.push(val)
  }

  editData(val:any)
  {
    
    let index =  this.data.findIndex((ele)=>ele.name===val.name);
    this.data[index] = val

    

  }


  public firstName:string = "sUDip"
  info = {name:"sudip",address:'dashindhoka'}
}
