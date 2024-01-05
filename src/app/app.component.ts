import { Component } from '@angular/core';
import { SnackbarService } from './snack-bar/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'v_new_test';

  constructor(private snackBarService: SnackbarService) {}

  onClicked() {
    this.snackBarService.openCustomSnackBar("Download Started...", "Close");
  }
}
