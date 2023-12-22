import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-guess-row',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './guess-row.component.html',
  styleUrl: './guess-row.component.css'
})
export class GuessRowComponent {
  //TODO EXPORTAR O ESTILO BASEADO NO GUESS
}
