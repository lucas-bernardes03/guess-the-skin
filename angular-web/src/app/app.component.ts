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
import {TooltipModule} from "primeng/tooltip";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {EndGameModalComponent} from "./components/end-game-modal/end-game-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DividerModule, CardModule, GuessRowComponent, FormsModule, ButtonModule, RippleModule, InputTextModule, NgOptimizedImage, ImageModule, AutoCompleteModule, TooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  image$ !: Observable<any>
  autocompleteList : any[] = []
  filteredList: string[] = []

  gameEnded : boolean = false
  currentGuess !: any
  guesses: Comparison[] = []
  displayedHeaders: string[] = ['Weapon', 'Year', 'Container']

  ref : DynamicDialogRef | undefined

  constructor(public service : SkinService, public dialogService: DialogService) { }

  getStyle() : any{
    return {
      width : '500px',
      height: '250px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  ngOnInit(): void {
    if(typeof window !== "undefined") this.loadPreviousState()

    this.image$ = this.service.getSkin()
    this.service.getNameList().subscribe((data : any) => {
      if(data) this.autocompleteList = data
    })

  }

  guess(): void {
    if(this.guesses.length < 6 && this.currentGuess) {
      this.service.guess(this.currentGuess.id).subscribe((data : Comparison) => {
        if(data){
          let comparison = new Comparison(data.skinImage, data.skinName, data.sameWeapon, data.yearsDiff, data.sameContainer, data.sameRarity, data.sameModifier, data.skinCollection)
          this.addGuess(comparison)

          let correctGuess = this.verifyGuess(comparison)

          if(correctGuess){
            this.gameEnded = true
            this.showDialog(true)
            localStorage.setItem("gameEnded", 'won')
          }
          else if(!correctGuess && this.guesses.length == 6){
            this.gameEnded = true
            this.showDialog(false)
            localStorage.setItem("gameEnded", 'lost')
          }

        }

        this.currentGuess = null
      })
    }

    else{
      this.gameEnded = true
      this.showDialog(false)
      localStorage.setItem("gameEnded", 'lost')
      this.currentGuess = null
    }
  }

  filter(event : AutoCompleteCompleteEvent, ){
    let filtered: any[] = [];
    let query = event.query;

    this.autocompleteList.forEach(skin => {
      if (skin.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(skin);
      }
    })

    this.filteredList = filtered;
  }

  verifyGuess(comparison:Comparison){
    let correct = true;

    Object.entries(comparison).forEach(([key, value]) => {
      if(!correct) return

      switch (key){
        case 'skinImage':
          break

        case 'skinName':
          break

        case 'yearsDiff':
          correct = (value.equals === 0)
          break

        default:
          correct = value
      }
    })

    return correct
  }

  addGuess(comparison : any){
    this.guesses.push(comparison)
    localStorage.setItem("guesses", JSON.stringify(this.guesses))
  }


  private loadPreviousState() {

    if (localStorage.getItem("guesses") != null) {
      this.guesses = JSON.parse(localStorage.getItem("guesses")!)

      // //2 REFRESH LIMPA O LOCALSTORAGE - TESTE
      // localStorage.clear()
    }

    if (localStorage.getItem("gameEnded") != null) {
      this.gameEnded = true
      let result = localStorage.getItem("gameEnded")
      this.showDialog((result == 'won'))

      //2 REFRESH LIMPA O LOCALSTORAGE - TESTE
      localStorage.clear()
    }
  }

  showDialog(won:boolean){
    this.ref = this.dialogService.open(EndGameModalComponent, {
      data: {
        win: won
      },
      header: won ? "Congratulations!" : "You Lost :(",
      modal:true,
      dismissableMask: true,
      closeOnEscape: true
    })
  }

  //TODO
  //ESTILIZAÇÃO DAS HINTS
  //ANIMAÇÕES DO HINT
  //MODAL DE GUIA/INSTRUCOES
  //SISTEMA DE HISTORICO
  //DETALHAR MODAL END GAME
  //ACESSIBILIDADE
  //PERSISTIR DADOS DO JOGO NO REFRESH
}

