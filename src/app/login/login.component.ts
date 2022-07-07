import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private authService: AutorizacionService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email, this.password)
  }

}
