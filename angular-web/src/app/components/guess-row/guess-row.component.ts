import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-guess-row',
  standalone: true,
  imports: [
    CardModule,
    NgForOf
  ],
  templateUrl: './guess-row.component.html',
  styleUrl: './guess-row.component.css'
})
export class GuessRowComponent {
  hints = [1, 2, 3, 4, 5, 6, 7]

  setCellStyle(hint : any) : any{
    let style = {
      width: '60px',
      height: '60px',
      margin: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return style
  }
}
