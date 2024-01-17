import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CommonModule} from "@angular/common";
import {StatChartComponent} from "../stat-chart/stat-chart.component";
import {CountdownConfig, CountdownModule} from "ngx-countdown";

@Component({
  selector: 'app-end-game-modal',
  standalone: true,
  imports: [CommonModule, StatChartComponent, CountdownModule],
  templateUrl: './end-game-modal.component.html',
  styleUrl: './end-game-modal.component.css'
})
export class EndGameModalComponent implements OnInit{
  statistics : any
  distribution: any[] = []
  cdConfig !: CountdownConfig

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.statistics = this.config.data.statistics
  }

  ngOnInit() {
    this.distribution = this.statistics.distribution

    this.cdConfig = this.getCdConfig()
  }

  getCdConfig(){
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate()+1)
    tomorrow.setHours(0, 0 ,0)

    let diff = (tomorrow.getTime() - new Date().getTime()) / 1000

    let config : CountdownConfig = {
      leftTime: diff
    }

    return config
  }
}
