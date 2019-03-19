import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data = [
    {month: '1', temperature: 7.0},
    {month: '2', temperature: 6},
    {month: '3', temperature: 9},
    {month: '4', temperature: 14},
    {month: '5', temperature: 18},
    {month: '6', temperature: 21},
    {month: '7', temperature: 25},
    {month: '8', temperature: 26},
    {month: '9', temperature: 23},
    {month: '10', temperature: 18},
    {month: '11', temperature: 13},
    {month: '12', temperature: 9},
  ];
  options = {
    height: 450,
    forceFit: true,
  };

  ready(chart: any) {
    chart.source(this.data, {
      month: {
        alias: '月份',
        range: [0, 1],
      },
      temperature: {
        alias: '访问人数',
      },
    });
    chart
      .line()
      .position('month*temperature')
      .size(2);
    chart.render();
  }

  destroy() {
    console.log('line destroy');
  }
}
