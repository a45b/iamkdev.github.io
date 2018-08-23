import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

  constructor() { }
  
  canActivate() {
    console.log('AuthGuard#canActivate called');
    return true;
  }
}
