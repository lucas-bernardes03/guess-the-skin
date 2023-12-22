import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {GuessRowComponent} from "./components/guess-row/guess-row.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DividerModule, CardModule, GuessRowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-web';
}
