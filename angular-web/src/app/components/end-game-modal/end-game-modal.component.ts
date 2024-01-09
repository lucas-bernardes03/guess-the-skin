import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ChartModule} from "primeng/chart";

@Component({
  selector: 'app-end-game-modal',
  standalone: true,
  imports: [
    ChartModule
  ],
  templateUrl: './end-game-modal.component.html',
  styleUrl: './end-game-modal.component.css'
})
export class EndGameModalComponent implements OnInit{
  statistics : any

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.statistics = this.config.data.statistics
  }

  ngOnInit() {
  }
}
