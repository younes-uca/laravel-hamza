import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/zynerator/security/User.model';
import {Role} from 'src/app/zynerator/security/Role.model';
import { AuthService } from 'src/app/zynerator/security/Auth.service';

@Component({
  selector: 'app-register-technicien',
  templateUrl: './register-technicien.component.html',
  styleUrls: ['./register-technicien.component.scss']
})
export class RegisterTechnicienComponent implements OnInit {
  registerForm = new FormGroup({
    prenom : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    userName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    const formValues = this.registerForm.value;
    const {prenom, nom, userName, password, email} = formValues;
    const role = new Role();
    role.authority = 'ROLE_Technicien' ;
    this.user.prenom = prenom;
    this.user.nom = nom;
    this.user.username = userName;
    this.user.password = password;
    this.user.email = email;
    this.user.roles = [role] ;
    this.authService.registerTechnicien();

  }
    get user(): User {
        return this.authService.user;
    }

    set user(value: User) {
        this.authService.user = value;
    }

}
