import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginModel } from 'src/app/models/Login.model'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  router: Router

  constructor(private formbuilder: FormBuilder, private http: HttpClient, router: Router){
    this.router = router
  }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit(router = this.router){
    if(this.loginForm.invalid){
      return
    }
    const formValues = this.loginForm.getRawValue() as LoginModel
    this.http.post('http://localhost:3000/login', formValues).subscribe((res) =>{
    let response_string = JSON.stringify(res)
    localStorage.setItem("token", JSON.parse(response_string).data);
    return router.navigate(["/personal-infos"])
    })



  }
}
