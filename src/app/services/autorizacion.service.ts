import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor() { }

  login(email: string, password: string) {
    console.log({
      email, password
    })
  }

  registro(email: string, password: string) {
    console.log({
      email, password
    })
  }
}
