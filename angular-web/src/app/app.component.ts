import {Component, OnInit} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DividerModule } from "primeng/divider";
import { CardModule } from "primeng/card";
import { GuessRowComponent } from "./components/guess-row/guess-row.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import Skin from "./model/Skin";
import { ImageModule } from "primeng/image";
import {SkinService} from "./service/skin.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DividerModule, CardModule, GuessRowComponent, FormsModule, ButtonModule, RippleModule, InputTextModule, NgOptimizedImage, ImageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  currentSkin$ !: Observable<Skin>
  currentGuess: string = ''
  guesses = [1,2,3,4,5,6]

  constructor(public service : SkinService) {

  }

  ngOnInit(): void {
    this.currentSkin$ = this.service.getSkin()
  }

  //TODO SETAR 1 SKIN POR SERVER, AJUSTAR CSS, INPUT DE DADOS POR COMPONENTE

}
