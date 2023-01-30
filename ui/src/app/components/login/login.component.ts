import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginModel } from 'src/app/models/Login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient){

  }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit(){
    const formValues = this.loginForm.getRawValue() as LoginModel
  }
}
