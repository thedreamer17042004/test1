import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxChartModule, DxPieChartModule, DxRangeSelectorModule } from 'devextreme-angular';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, DxChartModule, DxPieChartModule, DxRangeSelectorModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Chart Components</h2>
      
      <!-- Line Chart -->
      <div class="component-card mb-20">
        <h3>Sales Overview (Line Chart)</h3>
        <dx-chart
          [dataSource]="salesData"
          [height]="400"
        >
          <dxi-series
            valueField="sales"
            argumentField="month"
            type="line"
            name="Sales"
          />
          <dxo-legend [visible]="true" [position]="'outside'" [orientation]="'horizontal'"></dxo-legend>
          <dxo-common-series-settings [label]="{ visible: true }" />
          <dxo-argument-axis [label]="{ overlappingBehavior: 'rotate' }" />
          <dxo-value-axis [label]="{ format: 'currency' }" />
          <dxo-tooltip [enabled]="true" [shared]="true" />
          <dxo-export [enabled]="true" />
        </dx-chart>
      </div>
      
      <!-- Bar Chart -->
      <div class="component-card mb-20">
        <h3>Product Sales by Category (Bar Chart)</h3>
        <dx-chart
          [dataSource]="productCategories"
          [height]="400"
        >
          <dxi-series
            valueField="sales"
            argumentField="category"
            type="bar"
            name="Sales"
          />
          <dxo-legend [visible]="true"></dxo-legend>
          <dxo-common-series-settings [label]="{ visible: true }" />
          <dxo-argument-axis [label]="{ overlappingBehavior: 'rotate' }" />
          <dxo-value-axis [label]="{ format: 'currency' }" />
          <dxo-tooltip [enabled]="true" />
          <dxo-export [enabled]="true" />
        </dx-chart>
      </div>
      
      <!-- Pie Chart -->
      <div class="component-card mb-20">
        <h3>Market Share (Pie Chart)</h3>
        <dx-pie-chart
          [dataSource]="marketShare"
          [height]="400"
        >
          <dxi-series
            valueField="share"
            argumentField="company"
            name="Market Share"
          />
          <dxo-legend [visible]="true" [position]="'inside'" [orientation]="'vertical'"></dxo-legend>
          <dxo-labels [visible]="true" [format]="'percent'" />
          <dxo-tooltip [enabled]="true" />
          <dxo-export [enabled]="true" />
        </dx-pie-chart>
      </div>
      
      <!-- Range Selector -->
      <div class="component-card mb-20">
        <h3>Time Range Selector</h3>
        <dx-range-selector
          [dataSource]="timeData"
          [height]="200"
        >
          <dxo-chart>
            <dxi-series valueField="value" argumentField="date" type="line" />
          </dxo-chart>
          <dxo-scale [startValue]="new Date(2024, 0, 1)" [endValue]="new Date(2024, 11, 31)" />
          <dxo-behavior [snapping]="true" />
        </dx-range-selector>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Line Chart with tooltips and labels</li>
          <li>Bar Chart for categorical data</li>
          <li>Pie Chart for proportional data</li>
          <li>Range Selector for time-based data</li>
          <li>Export functionality for all charts</li>
          <li>Responsive design</li>
          <li>Custom formatting (currency, percent)</li>
          <li>Legend positioning</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class ChartComponent {
  salesData = [
    { month: 'Jan', sales: 15000 },
    { month: 'Feb', sales: 18000 },
    { month: 'Mar', sales: 22000 },
    { month: 'Apr', sales: 19000 },
    { month: 'May', sales: 25000 },
    { month: 'Jun', sales: 28000 },
    { month: 'Jul', sales: 32000 },
    { month: 'Aug', sales: 29000 },
    { month: 'Sep', sales: 35000 },
    { month: 'Oct', sales: 31000 },
    { month: 'Nov', sales: 38000 },
    { month: 'Dec', sales: 45000 }
  ];

  productCategories = [
    { category: 'Electronics', sales: 125000 },
    { category: 'Clothing', sales: 85000 },
    { category: 'Furniture', sales: 65000 },
    { category: 'Books', sales: 45000 },
    { category: 'Toys', sales: 35000 }
  ];

  marketShare = [
    { company: 'Company A', share: 35 },
    { company: 'Company B', share: 28 },
    { company: 'Company C', share: 20 },
    { company: 'Company D', share: 12 },
    { company: 'Others', share: 5 }
  ];

  timeData = [
    { date: new Date(2024, 0, 1), value: 100 },
    { date: new Date(2024, 1, 1), value: 120 },
    { date: new Date(2024, 2, 1), value: 140 },
    { date: new Date(2024, 3, 1), value: 130 },
    { date: new Date(2024, 4, 1), value: 160 },
    { date: new Date(2024, 5, 1), value: 180 },
    { date: new Date(2024, 6, 1), value: 200 },
    { date: new Date(2024, 7, 1), value: 190 },
    { date: new Date(2024, 8, 1), value: 220 },
    { date: new Date(2024, 9, 1), value: 210 },
    { date: new Date(2024, 10, 1), value: 240 },
    { date: new Date(2024, 11, 1), value: 260 }
  ];
}
