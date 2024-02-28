import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  chartdata: any;

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  ngOnInit() {

  }


  RenderChart(labeldata: any, maindata: any, colordata: any, type: any, id: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });




  }
}
