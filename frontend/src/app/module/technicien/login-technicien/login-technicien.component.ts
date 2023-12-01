import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService } from 'src/app/zynerator/security/Auth.service';


@Component({
  selector: 'app-login-technicien',
  templateUrl: './login-technicien.component.html',
  styleUrls: ['./login-technicien.component.scss']
})
export class LoginTechnicienComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginTechnicien(username, passowrd);

  }
    register(){
    this.router.navigate(['/technicien/register']);
  }
}
