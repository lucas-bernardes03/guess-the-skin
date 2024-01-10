import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stat-chart',
  standalone: true,
  imports: [],
  templateUrl: './stat-chart.component.html',
  styleUrl: './stat-chart.component.css'
})
export class StatChartComponent implements OnInit{
  @Input()
  stats !: any

  ngOnInit() {
    console.log('stats', this.stats)
  }
}
