import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie2',
  templateUrl: './pie2.component.html',
  styleUrls: ['./pie2.component.css']
})
export class Pie2Component implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit() {

      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false,
         
        },
        title: {
          text: "Number of employees by Contract type"
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
  
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
  
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: true
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          name: '%',
           data: [
              ['CDD',   10.0],
             
              {
                 name: 'CDI',
                 y: 90.0,
                 sliced: true,
                 selected: true
              }
              
           ]
        }]
      };
  
      HC_exporting(Highcharts);
  
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
  

}
