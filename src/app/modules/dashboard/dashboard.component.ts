import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart!: [];
  cardData!: [];
  pieData!: [];
  dataSubscription!: Subscription;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dashboardService.getHighchartsData()
    .subscribe((response: any) => {
      this.bigChart = response.bigChart;
      this.cardData = response.cardData;
      this.pieData = response.pieData;
      console.log(response);
    })
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
