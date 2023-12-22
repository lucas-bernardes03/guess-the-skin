import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {GuessRowComponent} from "./components/guess-row/guess-row.component";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import Skin from "./model/Skin";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DividerModule, CardModule, GuessRowComponent, FormsModule, ButtonModule, RippleModule, InputTextModule, NgOptimizedImage, ImageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //animations?
})
export class AppComponent {
  currentGuess: string = ''
  mockSkin !: Skin
  guesses = [1,2,3,4,5,6]

  constructor() {
    this.mockSkin = new Skin('https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_jorm_green_light_large.db1045fee0af23f28bb4affd164d07e3aadd42ec.png', 'Desert Eagle', 'Emerald Jörmungandr')
  }

  //TODO FIX ANIMATIONS & PREVENTDEAFULT OR MASKURL

}
