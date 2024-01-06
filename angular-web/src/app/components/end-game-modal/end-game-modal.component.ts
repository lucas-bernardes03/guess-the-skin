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
  options: any
  data: any

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.statistics = this.config.data.statistics
  }

  ngOnInit() {
    this.data = {
      labels: [1, 2, 3, 4, 5, 6, 'ded'],
      datasets: [{
        axis: 'y',
        data: this.statistics.distribution,
        backgroundColor: '#fcac19'
      }]
    }

    this.options = {
      indexAxis: 'y',
      scales: {
        x: {
          max: this.statistics.totalGames,
          display: false,
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        tooltip:{
          enabled: false
        },
        legend:{
          display: false
        }
      }
    }
  }
}
