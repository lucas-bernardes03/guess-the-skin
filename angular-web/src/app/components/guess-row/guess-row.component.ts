import {Component, Input, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import Comparison from "../../model/Comparison";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-guess-row',
  standalone: true,
  imports: [
    CardModule,
    NgForOf,
    AsyncPipe,
    ImageModule,
    NgIf
  ],
  templateUrl: './guess-row.component.html',
  styleUrl: './guess-row.component.css'
})
export class GuessRowComponent implements OnInit{
  @Input()
  guess !: Comparison

  skinName !: string
  skinImage !: string

  hints : any[] = []

  setCellStyle(hint : any) : any{
    return {
      width: '120px',
      height: '55px',
      margin: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: (!hint.equals) ? 'red' : 'green',

    }
  }

  ngOnInit(): void {
    Object.entries(this.guess).forEach(([key, value]) => {
      switch (key){
        case 'skinImage':
          this.skinImage = value
          break

        case 'skinName':
          this.skinName = value
          break

        case 'yearsDiff':
          value.equals = (value.equals === 0)
          this.hints.push(value)
          break

        default:
          this.hints.push(value)
      }
    })
  }
}
