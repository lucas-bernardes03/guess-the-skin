import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CommonModule} from "@angular/common";
import {StatChartComponent} from "../stat-chart/stat-chart.component";

@Component({
  selector: 'app-end-game-modal',
  standalone: true,
  imports: [CommonModule, StatChartComponent],
  templateUrl: './end-game-modal.component.html',
  styleUrl: './end-game-modal.component.css'
})
export class EndGameModalComponent implements OnInit{
  statistics : any
  distribution: any[] = []

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.statistics = this.config.data.statistics
  }

  ngOnInit() {
    this.distribution = this.statistics.distribution
  }
}
