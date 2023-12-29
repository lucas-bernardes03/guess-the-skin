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
import { ImageModule } from "primeng/image";
import {SkinService} from "./service/skin.service";
import {Observable} from "rxjs";
import Comparison from "./model/Comparison";
import {AutoCompleteCompleteEvent, AutoCompleteModule} from "primeng/autocomplete";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DividerModule, CardModule, GuessRowComponent, FormsModule, ButtonModule, RippleModule, InputTextModule, NgOptimizedImage, ImageModule, AutoCompleteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  image$ !: Observable<any>
  autocompleteList : string[] = []

  currentGuess !: any
  guesses: Comparison[] = []
  displayedHeaders: string[] = ['Weapon', 'Year', 'Container', 'Rarity', 'Modifier', 'Collection']

  getStyle() : any{
    return {
      width : '500px',
      height: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  constructor(public service : SkinService) {

  }

  ngOnInit(): void {
    this.image$ = this.service.getSkin()
    this.service.getNameList().subscribe((data : any) => {
      if(data) this.autocompleteList = data
      console.log('autocomplete', this.autocompleteList)
    })
  }

  guess(): void {
    if(this.guesses.length < 6 && this.currentGuess) {
      this.service.guess(this.currentGuess).subscribe((data : Comparison) => {
        if(data){
          let comparison = new Comparison(data.skinImage, data.skinName, data.sameWeapon, data.yearsDiff, data.sameContainer, data.sameRarity, data.sameModifier, data.skinCollection)
          this.guesses.push(comparison)
        }

        this.currentGuess = null
      })
    }
  }

  filter(event : AutoCompleteCompleteEvent, ){
    //TODO
  }

  //TODO
  //AJUSTAR CSS / DIVIDER ENTRE O NOME E OS HINTS / ESTILIZAÇÃO DAS HINTS
  //ARRUMAR OS DADOS DOS HINTS
  //ANIMAÇÕES DO HINT

}
