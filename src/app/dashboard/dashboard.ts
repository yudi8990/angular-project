import { Component, AfterViewInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit() {
    this.initializeCharts();
  }

  private initializeCharts(): void {

    document.querySelectorAll('.apexcharts-canvas').forEach(el => el.remove());

    const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 36, 26, 45, 48, 52, 53, 41, 32, 48, 56];
    const randomizeArray = (arg: number[]) => arg.sort(() => Math.random() - 0.5);

    const spark1: ApexOptions = {
      chart: {
        id: 'sparkline1',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: { enabled: true },
      },
      stroke: { curve: 'straight' },
      fill: { opacity: 1 },
      series: [{ name: 'Sales', data: randomizeArray([...sparklineData]) }],
      labels: [...Array(24).keys()].map(n => `2018-09-${(n + 1).toString().padStart(2, '0')}`),
      yaxis: { min: 0 },
      xaxis: { type: 'datetime' },
      colors: ['#1283ca'],
     
    };

    const spark2: ApexOptions = {
      chart: {
        id: 'sparkline2',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: { enabled: true },
      },
      stroke: { curve: 'straight' },
      fill: { opacity: 1 },
      series: [{ name: 'Expenses', data: randomizeArray([...sparklineData]) }],
      labels: [...Array(24).keys()].map(n => `2018-09-${(n + 1).toString().padStart(2, '0')}`),
      yaxis: { min: 0 },
      xaxis: { type: 'datetime' },
      colors: ['#e16b17'],
    };

    const spark3: ApexOptions = {
      chart: {
        id: 'sparkline3',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: { enabled: true },
      },
      stroke: { curve: 'straight' },
      fill: { opacity: 1 },
      series: [{ name: 'Profits', data: randomizeArray([...sparklineData]) }],
      labels: [...Array(24).keys()].map(n => `2018-09-${(n + 1).toString().padStart(2, '0')}`),
      xaxis: { type: 'datetime' },
      yaxis: { min: 0 },
      colors: ['#10e3c7']
    };

    const chart1 = new ApexCharts(document.querySelector("#chart1"), this.chartOptions1);
    const chart2 = new ApexCharts(document.querySelector("#chart2"), this.chartOptions2);
    const chart3 = new ApexCharts(document.querySelector("#chart3"), this.chartOptions3);

    const sparkChart1 = new ApexCharts(document.querySelector("#spark1"), spark1);
    const sparkChart2 = new ApexCharts(document.querySelector("#spark2"), spark2);
    const sparkChart3 = new ApexCharts(document.querySelector("#spark3"), spark3);

    chart1.render();
    chart2.render();
    chart3.render();
    sparkChart1.render();
    sparkChart2.render();
    sparkChart3.render();
  }

    private trigoSeries(count: number, strength: number): number[] {
    const series: number[] = [];
    for (let i = 0; i < count; i++) {
      series.push(Math.floor((Math.sin(i / strength) * strength + strength + Math.random() * strength) / 2));
    }
    return series;
  }

  // Existing Charts (you can rename these sections if needed)

   chartOptions1: ApexOptions = {
    chart: {
      height: 340,
      type: 'line',
      zoom: { enabled: false }
    },
    stroke: {
      width: 4,
      curve: 'smooth'
    },
    colors: ['#008FFB', '#FF4560'],
    series: [
      {
        name: "Day Time",
        data: this.trigoSeries(52, 20)
      },
      {
        name: "Night Time",
        data: this.trigoSeries(52, 27)
      },
    ],
    title: {
      floating: false,
      //text: 'Customers',
      align: 'left',
      style: {
        fontSize: '18px'
      }
    },
    subtitle: {
      text: '168,215',
      align: 'center',
      margin: 30,
      offsetY: 40,
      style: {
        color: '#222',
        fontSize: '24px'
      }
    },
    markers: { size: 0 },
    grid: {},
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false }
    },
    yaxis: {
      tickAmount: 2,
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      min: 0
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetY: -20,
      offsetX: -30
    }
  };

  chartOptions2: ApexOptions = {
    series: [{ name: 'Inflation', data: [5, 8, 10, 12, 15, 14, 11, 10, 15, 8, 7, 5] }],
    chart: { height: 330, type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 5, dataLabels: { position: 'top' } } },
    dataLabels: {
      enabled: true,
      formatter: val => val + "%",
      offsetY: -20,
      style: { fontSize: '12px', colors: ["#304758"] }
    },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false }
  };

  chartOptions3: ApexOptions = {
    series: [1000, 500, 100],
    chart: { type: 'donut', height: 250 },
    labels: ["Pending", "Settled", "Closed"],
    colors: ['#f1416c', '#2a61ff', '#b3b7ca'],
    responsive: [{
      breakpoint: 400,
      options: { chart: { height: 200 }, legend: { position: 'bottom' } }
    }]
  };
}
