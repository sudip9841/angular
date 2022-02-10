import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { SecondChildComponent } from './second-child/second-child.component';
import { MypipePipe } from './mypipe.pipe';
import { CustompipePipe } from './custompipe.pipe';
import { CustonConcatArrayPipe } from './custon-concat-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CustomDirectiveDirective,
    SecondChildComponent,
    MypipePipe,
    CustompipePipe,
    CustonConcatArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
