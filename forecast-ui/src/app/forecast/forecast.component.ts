import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  name?: string | null;
  options: any;
  data?: number[];
  constructor(private productService:ProductService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const xAxisData: string[] = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    this.name = this.route.snapshot.paramMap.get('name');
    this.productService.forecast().then(
      (res) => {

    this.options = {
      legend: {
        data: ['bar'],
        align: 'left',
      },
      color:'#544d4d',
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: res,
          animationDelay: (idx: number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
      }
    )
  }

}
