import { AfterViewInit, Component, Inject, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, map, take, timer } from 'rxjs';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent {
  value = 100;
  @ViewChild(MatProgressBar) progressBar!: MatProgressBar;
  countDownSub: Subscription | undefined;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  onAction() {
    this.data.snackBar.dismiss();
  }

  ngAfterViewInit() {
    const start = 100;
    this.countDownSub = timer(100, 80).pipe(
      map(i => start - i),
      take(start + 1)
    ).subscribe({
      next: i => this.value = i,
      complete: () => {
        timer(500).subscribe(() => this.onAction());
      }
    });
  }
  ngOnDestroy(): void {
    this.countDownSub?.unsubscribe();
  }
}
