import { Component, OnInit ,HostListener, ViewChild, AfterViewChecked, ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked { 
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    address: new FormControl(''),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
    
   });
   @ViewChild('myForm') f ;
   @HostListener('click', ['$event'])
   @HostListener('document:keydown.Tab', ['$event'])
   onClick(e) {
    this.activeField=document.activeElement.getAttribute('formControlName');
    //console.dir(document.activeElement);
     this.inputs = document.querySelectorAll('input');
     if(e.target && e.target.nodeName == 'INPUT' )
      this.index = parseInt(this.getIndexFromSet(this.inputs, e.target));
    // console.log("Hello")
     Object.keys(this.form.controls).forEach(key => {
   if(!this.form.get(key).valid){
      this.formList.push((this.form.get(key)));
     } ;
      });
  //     console.log(this.formList);

  //    // this.formList[3].nativeElement.focus();

  //    let invalid = <FormControl[]>Object.keys(this.form.controls).map(key => this.form.controls[key]).filter(ctl => ctl.invalid);

  
   }
 
  getIndexFromSet(set, elm){
    var setArr = [].slice.call(set);
    for( var i in setArr )
       if( setArr[i] == elm )
         return i;      
}
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
     if(!this.f.valid)
     {  
          if(   event.ctrlKey && event.key== 'ArrowDown')
          {
            if(this.isFirst){
              this.point=this.index;
              this.isFirst=false;
            }
               
            console.log("down: Starting point is  "+this.point);    
              if(this.point >= this.invalidFields.length)
              {
                  this.point=1
              }
              this.invalidFields[this.point].focus();
              this.point=this.point+1;

              console.log("down: Ending point is  "+this.point);
           
          }
          else if(event.ctrlKey && event.key== 'ArrowUp')
          {
            console.log("Up: Starting point is  "+this.point);
            if(this.isFirst){
              this.point=this.index;
              this.isFirst=false;
            }
              this.point=this.point-1;
              if(this.point<=0)
              {
                  this.point=this.invalidFields.length-1;
              }
              this.invalidFields[this.point].focus();
              console.log("Up: Ending point is  "+this.point);
            }
      }
  }
  
  ngAfterViewChecked(){
    this.invalidFields = [].slice.call(document.getElementsByClassName('ng-invalid'));
  }
    constructor() { }
  point = 1;
  activeField : any;
   invalidFields: any;
   isFirst = true;
   index =1;
    inputs:any;
    formList =[];
    get firstname(){
      return this.form.get('firstName')
    }

  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}
