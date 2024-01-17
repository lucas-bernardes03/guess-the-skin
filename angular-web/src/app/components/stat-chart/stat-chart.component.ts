import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-stat-chart',
  standalone: true,
  imports: [CommonModule, ButtonModule, ImageModule],
  templateUrl: './stat-chart.component.html',
  styleUrl: './stat-chart.component.css',
})
export class StatChartComponent implements OnInit{
  @Input()
  stats !: any

  @Input()
  totalGames !: any

  ngOnInit() {
    console.log('stats', this.stats)
  }

  getStyle(stat:any){
    return {
      backgroundColor: '#fcac19',
      borderRadius: '5px',
      width: `${500 / this.totalGames * stat.times}px`,
      height: '30px',
      marginLeft: '10px',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center'
    }
  }
}
