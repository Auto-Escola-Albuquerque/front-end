import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
  };
  config2: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
  };
  success(msg: string) {
    this.config['panelClass'] = ['success', 'notification'];
    this.snackBar.open(msg,'', this.config);
  }

  error(msg: string) {
    this.config['panelClass'] = ['error', 'notification'];
    this.snackBar.open(msg,'', this.config);
  }

  empty(msg: string) {
    this.config['panelClass'] = ['notification'];
    this.snackBar.open(msg, '', this.config2);
  }
}
