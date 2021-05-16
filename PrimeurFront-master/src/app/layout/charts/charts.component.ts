import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        'Empathy',
        'Communication',
        'Teamwork',
        'Approachability and Helpfulness',
        'Patience',
        'Open-mindedness',
        'Problem solving',
        'Accountability',
        'Creativity',
        'Time management',
        'learning capacity'
    ];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [0, 1, 1, 1, 1, 2, 1, 1 , 1 , 1 , 1], label: 'note actuelle' },
        { data: [3, 3, 3, 2, 3, 3, 4, 4 , 4 , 4 , 4], label: 'note souhaité' }
    ];
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    }

    constructor() {}

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
}
