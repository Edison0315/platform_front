import { Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
})
export class LoginComponent implements OnInit {

  form!: UntypedFormGroup;

  usr_email: any;
  usr_password: any;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.form.patchValue({
      usr_email: this.form.get('usr_email').value.trim(),
      usr_password: this.form.get('usr_password').value.trim()
    })
    this.loginService.login(this.form.value).subscribe({
      next: (data) => {
        // Aca esta devolviendo un ERROR el API
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    })

  }

}
