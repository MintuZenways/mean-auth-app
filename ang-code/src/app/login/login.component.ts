import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router'
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false; 
  // strPattern = "^[a-z]+$";
   constructor(private fb: FormBuilder, private userService: AuthenticationService, private router: Router) { }
   form = this.fb.group({
    // name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-z]+$/)]],
   
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    
       
   });
   
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
  afterSubmit(){
 this.submitted = true;
     this.userService.login(this.form.value).subscribe((res) => {
      console.log(res);
      if(res.token !== ''){
        localStorage.setItem("access-token", res.token);
      }
      console.log("Token");
      console.log(localStorage.getItem("access-token"));
      this.router.navigate(['/data']);
    });
   // window.location.reload();
  // console.log(localStorage.getItem("access-token"));
   
 
} 



ngOnInit(): void {
}
}
