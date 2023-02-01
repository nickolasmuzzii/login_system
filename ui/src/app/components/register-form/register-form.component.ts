import { Component, OnInit } from '@angular/core';
import { provideNgxMask } from 'ngx-mask';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/models/Register.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { catchError, map, throwError } from 'rxjs'
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [provideNgxMask()],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  device = false;
  endereco_viacep: any;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.endereco_viacep = {}
  }
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      nome: ['', Validators.required],
      password: ['', Validators.required],
      confirm_senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      data_nascimento: ['', Validators.required],
      cep: [''],
      rua: [''],
      estado: [''],
      cidade: [''],
    });
    if (window.innerWidth <= 768) {
      this.device = true;
    }
  }

  onSubmit() {
    const formValues = this.registerForm.getRawValue() as RegisterModel;
    if (formValues['password'] !== formValues['confirm_senha']) {
      alert("A senhas são incompatíveis")
      return this.registerForm.setErrors({
        incompatible_passwords: true,
      });
    }
    if (this.registerForm.invalid) {
      alert("Por favor preencha o formulário corretamente")
      return;
    }
    const sendData = {
      user_data: {
        nome: formValues['nome'],
        email: formValues['email'],
        data_nascimento: moment().format(formValues['data_nascimento']),
        password: formValues['password'],
      },
      endereco_data: {
        cep: formValues['cep'],
        rua: formValues['rua'],
        cidade: formValues['cidade'],
        estado: formValues['estado'],
      },
    };
    this.http
      .post('http://localhost:3000/user', sendData)
      .pipe(
        map((response: any) => response),
        catchError(error => {
          if(error.error.message){
            alert(error.error.message)
          }
          else if(error){
            alert("Ocorreu um erro ao criar o usuário")
          }
          return throwError(error);
        })
      )
      .subscribe((response) => {
        alert(response.message)
        return this.router.navigate(["/login"])
      })
  }
  searchCep(event: any) {
    this.http
      .get(`https://viacep.com.br/ws/${event.target.value}/json/`)
      .subscribe((data) => {
        return this.endereco_viacep = data;
      });
  }
}
