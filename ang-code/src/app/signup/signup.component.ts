import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false; 
  // strPattern = "^[a-z]+$";
   constructor(private fb: FormBuilder, private userService: AuthenticationService) { }
   form = this.fb.group({
    // name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-z]+$/)]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
       
   });
   
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
  afterSubmit(){
 this.submitted = true;
 if(this.form.invalid){
 return;
 }
 //alert(JSON.stringify(this.form.value));
 this.userService.create(this.form.value).subscribe(() => {
   alert("New user is created successfully.");
 })
}
 //alert(JSON.stringify(this.form.value)); this.products.create(this.form.value).subscribe(() => {
 // console.log(this.form.value)
 // alert("Product has been saved!!!");
//})
  ngOnInit(): void {
  }

}
