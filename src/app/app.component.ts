
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeComponent } from "./Acceuil/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})

export class AppComponent implements OnInit {
  title = 'ptfolio';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private countDownDate = new Date('July 29, 2024 15:37:25').getTime();

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(
      map(() => this.updateCountdown())
    ).subscribe();
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
