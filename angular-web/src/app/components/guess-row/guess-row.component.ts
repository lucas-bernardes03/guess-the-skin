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
  hints = [1, 2, 3, 4, 5, 6]

  setCellStyle(guess : any) : any{
    let style = {
      width: '60px',
      height: '60px',
      margin: '5px',
      backgroundColor: (guess % 2 == 0) ? '#fcac19':'#28397f'
    }

    return style
  }
}
