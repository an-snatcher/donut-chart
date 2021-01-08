import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularproject11';
  donutChartData: any;
  data: any;


  constructor(private dataService: DataService) {
    this.data = this.dataService.getaData();
    this.chartInfo();
    console.log(this.data);
  }

  chartInfo() {
    this.donutChartData =  new Chart({
      chart : {
          type: 'pie',
          plotShadow: false,
      },
      credits: {
          enabled: false,
      },
      plotOptions: {
          pie: {
              innerSize: '90%',
              borderColor: null,
              size: 200,
              slicedOffset: 10,
              dataLabels: {
                  formatter: function() {
                      console.log('test');
                      return this.x;
                  }
              },
              startAngle: -30,
              
              
          },
      
      },
      title: {
          verticalAlign: 'middle',
          floating: true,
          text: '$ 50,000.000'
      },
      legend: {
          enabled: false
      },
      series: [
          {
            type: 'pie',
            data: this.data,
          },
        ],
  });
  }
  
  
}
