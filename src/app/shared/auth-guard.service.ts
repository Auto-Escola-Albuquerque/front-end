import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {
  }
  canActivate() {
    return true;
  }
  canActivateChild() {
    if (this.storageService.getData('name')) {
      return true;
    } else {
      window.alert('Ops! Página em branco.');
      return false;
    }
  }

}
