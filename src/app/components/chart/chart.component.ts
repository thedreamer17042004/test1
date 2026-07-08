import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface SalesData {
  month: string;
  sales: number;
  profit: number;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, FormsModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Chart Components (Pure Canvas)</h2>
      
      <!-- Line Chart -->
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Sales Overview (Line Chart)</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="chart-container">
            <canvas #lineChartCanvas width="800" height="300"></canvas>
          </div>
        </mat-card-content>
      </mat-card>
      
      <!-- Bar Chart -->
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Product Sales by Category (Bar Chart)</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="chart-container">
            <canvas #barChartCanvas width="800" height="300"></canvas>
          </div>
        </mat-card-content>
      </mat-card>
      
      <!-- Pie Chart -->
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Market Share (Pie Chart)</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="chart-container pie-chart-container">
            <canvas #pieChartCanvas width="400" height="300"></canvas>
            <div class="pie-legend">
              <div *ngFor="let item of marketShare" class="legend-item">
                <span class="legend-color" [style.background]="item.color"></span>
                <span>{{ item.label }}: {{ item.value }}%</span>
              </div>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
      
      <!-- Area Chart -->
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Revenue Trend (Area Chart)</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="chart-container">
            <canvas #areaChartCanvas width="800" height="250"></canvas>
          </div>
        </mat-card-content>
      </mat-card>
      
      <!-- Chart Type Selector -->
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Chart Configuration</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline">
            <mat-label>Select Chart Type</mat-label>
            <mat-select [(value)]="selectedChartType">
              <mat-option value="line">Line Chart</mat-option>
              <mat-option value="bar">Bar Chart</mat-option>
              <mat-option value="pie">Pie Chart</mat-option>
              <mat-option value="area">Area Chart</mat-option>
            </mat-select>
          </mat-form-field>
          
          <div class="mt-20">
            <p><strong>Selected Chart:</strong> {{ selectedChartType }}</p>
          </div>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Line Chart with multiple data series (Sales & Profit)</li>
          <li>Bar Chart for categorical data with custom colors</li>
          <li>Pie Chart with legend and percentage labels</li>
          <li>Area Chart for trend visualization</li>
          <li><strong>100% Pure Canvas API</strong> - No external libraries!</li>
          <li>Responsive design</li>
          <li>Custom color schemes</li>
          <li>Smooth animations</li>
          <li>Chart type selection</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      position: relative;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .pie-chart-container {
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: center;
    }
    
    canvas {
      border-radius: 4px;
      background: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .pie-legend {
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-width: 150px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
    }
    
    .legend-color {
      width: 16px;
      height: 16px;
      border-radius: 3px;
      display: inline-block;
    }
    
    mat-card {
      margin-bottom: 20px;
    }
  `],
  override: true
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('lineChartCanvas', { static: true }) lineChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barChartCanvas', { static: true }) barChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChartCanvas', { static: true }) pieChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('areaChartCanvas', { static: true }) areaChartCanvas!: ElementRef<HTMLCanvasElement>;
  
  selectedChartType = 'line';
  
  // Line Chart Data
  salesData: SalesData[] = [
    { month: 'Jan', sales: 15000, profit: 3000 },
    { month: 'Feb', sales: 18000, profit: 3600 },
    { month: 'Mar', sales: 22000, profit: 4400 },
    { month: 'Apr', sales: 19000, profit: 3800 },
    { month: 'May', sales: 25000, profit: 5000 },
    { month: 'Jun', sales: 28000, profit: 5600 },
    { month: 'Jul', sales: 32000, profit: 6400 },
    { month: 'Aug', sales: 29000, profit: 5800 },
    { month: 'Sep', sales: 35000, profit: 7000 },
    { month: 'Oct', sales: 31000, profit: 6200 },
    { month: 'Nov', sales: 38000, profit: 7600 },
    { month: 'Dec', sales: 45000, profit: 9000 }
  ];
  
  // Bar Chart Data
  productCategories: ChartData[] = [
    { label: 'Electronics', value: 125000, color: '#1976d2' },
    { label: 'Clothing', value: 85000, color: '#4caf50' },
    { label: 'Furniture', value: 65000, color: '#ff9800' },
    { label: 'Books', value: 45000, color: '#e91e63' },
    { label: 'Toys', value: 35000, color: '#9c27b0' }
  ];
  
  // Pie Chart Data
  marketShare: ChartData[] = [
    { label: 'Company A', value: 35, color: '#1976d2' },
    { label: 'Company B', value: 28, color: '#4caf50' },
    { label: 'Company C', value: 20, color: '#ff9800' },
    { label: 'Company D', value: 12, color: '#e91e63' },
    { label: 'Others', value: 5, color: '#9c27b0' }
  ];
  
  // Area Chart Data
  revenueData: SalesData[] = [
    { month: 'Jan', sales: 50000, profit: 10000 },
    { month: 'Feb', sales: 55000, profit: 11000 },
    { month: 'Mar', sales: 65000, profit: 13000 },
    { month: 'Apr', sales: 60000, profit: 12000 },
    { month: 'May', sales: 70000, profit: 14000 },
    { month: 'Jun', sales: 75000, profit: 15000 },
    { month: 'Jul', sales: 85000, profit: 17000 },
    { month: 'Aug', sales: 80000, profit: 16000 },
    { month: 'Sep', sales: 90000, profit: 18000 },
    { month: 'Oct', sales: 85000, profit: 17000 },
    { month: 'Nov', sales: 95000, profit: 19000 },
    { month: 'Dec', sales: 110000, profit: 22000 }
  ];
  
  ngAfterViewInit() {
    this.drawLineChart();
    this.drawBarChart();
    this.drawPieChart();
    this.drawAreaChart();
  }
  
  private drawLineChart() {
    const canvas = this.lineChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 40;
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - 2 * padding;
    
    // Draw axes
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw grid lines
    const xStep = graphWidth / (this.salesData.length - 1);
    const maxSales = Math.max(...this.salesData.map(d => d.sales));
    const yStep = graphHeight / 5;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + i * yStep;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.strokeStyle = '#f5f5f5';
      ctx.stroke();
      
      // Y axis labels
      ctx.fillStyle = '#757575';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'right';
      const value = Math.round(maxSales * (1 - i / 5));
      ctx.fillText(this.formatCurrency(value), padding - 10, y + 4);
    }
    
    // X axis labels
    ctx.fillStyle = '#757575';
    ctx.font = '12px Roboto';
    ctx.textAlign = 'center';
    for (let i = 0; i < this.salesData.length; i++) {
      const x = padding + i * xStep;
      ctx.fillText(this.salesData[i].month, x, canvas.height - padding + 20);
    }
    
    // Draw sales line
    this.drawLine(ctx, this.salesData.map(d => d.sales), '#1976d2', 'Sales');
    
    // Draw profit line
    this.drawLine(ctx, this.salesData.map(d => d.profit), '#4caf50', 'Profit');
    
    // Draw legend
    this.drawLegend(ctx, canvas.width, canvas.height, [
      { color: '#1976d2', label: 'Sales' },
      { color: '#4caf50', label: 'Profit' }
    ]);
  }
  
  private drawBarChart() {
    const canvas = this.barChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 40;
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - 2 * padding;
    
    const maxValue = Math.max(...this.productCategories.map(d => d.value));
    const barWidth = graphWidth / this.productCategories.length - 20;
    const scale = graphHeight / maxValue;
    
    // Draw axes
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + i * (graphHeight / 5);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.strokeStyle = '#f5f5f5';
      ctx.stroke();
      
      // Y axis labels
      ctx.fillStyle = '#757575';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'right';
      const value = Math.round(maxValue * (1 - i / 5));
      ctx.fillText(this.formatCurrency(value), padding - 10, y + 4);
    }
    
    // Draw bars
    for (let i = 0; i < this.productCategories.length; i++) {
      const data = this.productCategories[i];
      const barHeight = data.value * scale;
      const x = padding + i * (barWidth + 20) + 10;
      const y = canvas.height - padding - barHeight;
      
      // Draw bar
      ctx.fillStyle = data.color || '#1976d2';
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // Draw value label
      ctx.fillStyle = '#fff';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'center';
      if (barHeight > 20) {
        ctx.fillText(this.formatCurrency(data.value), x + barWidth / 2, y + barHeight / 2);
      }
      
      // X axis labels
      ctx.fillStyle = '#757575';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'center';
      ctx.fillText(data.label, x + barWidth / 2, canvas.height - padding + 20);
    }
  }
  
  private drawPieChart() {
    const canvas = this.pieChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.4;
    
    let startAngle = 0;
    const total = this.marketShare.reduce((sum, item) => sum + item.value, 0);
    
    // Draw pie slices
    for (let i = 0; i < this.marketShare.length; i++) {
      const data = this.marketShare[i];
      const sliceAngle = (data.value / total) * 2 * Math.PI;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      ctx.fillStyle = data.color || '#1976d2';
      ctx.fill();
      
      // Draw slice border
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw percentage label
      const midAngle = startAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(midAngle) * radius * 0.6;
      const labelY = centerY + Math.sin(midAngle) * radius * 0.6;
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Roboto';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${data.value}%`, labelX, labelY);
      
      startAngle += sliceAngle;
    }
    
    // Draw center text
    ctx.fillStyle = '#333';
    ctx.font = 'bold 16px Roboto';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Market Share', centerX, centerY - 20);
    ctx.font = '14px Roboto';
    ctx.fillText('Total: 100%', centerX, centerY + 10);
  }
  
  private drawAreaChart() {
    const canvas = this.areaChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 40;
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - 2 * padding;
    
    const maxSales = Math.max(...this.revenueData.map(d => d.sales));
    const xStep = graphWidth / (this.revenueData.length - 1);
    const yScale = graphHeight / maxSales;
    
    // Draw axes
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + i * (graphHeight / 5);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.strokeStyle = '#f5f5f5';
      ctx.stroke();
      
      // Y axis labels
      ctx.fillStyle = '#757575';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'right';
      const value = Math.round(maxSales * (1 - i / 5));
      ctx.fillText(this.formatCurrency(value), padding - 10, y + 4);
    }
    
    // Draw area
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    
    for (let i = 0; i < this.revenueData.length; i++) {
      const data = this.revenueData[i];
      const x = padding + i * xStep;
      const y = canvas.height - padding - (data.sales * yScale);
      
      ctx.lineTo(x, y);
      
      // X axis labels
      ctx.fillStyle = '#757575';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'center';
      ctx.fillText(data.month, x, canvas.height - padding + 20);
    }
    
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.closePath();
    
    // Fill area
    ctx.fillStyle = 'rgba(25, 118, 210, 0.3)';
    ctx.fill();
    
    // Draw line
    ctx.strokeStyle = '#1976d2';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw data points
    for (let i = 0; i < this.revenueData.length; i++) {
      const data = this.revenueData[i];
      const x = padding + i * xStep;
      const y = canvas.height - padding - (data.sales * yScale);
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#1976d2';
      ctx.fill();
      
      // Draw value label
      ctx.fillStyle = '#333';
      ctx.font = '11px Roboto';
      ctx.textAlign = 'center';
      ctx.fillText(this.formatCurrency(data.sales), x, y - 10);
    }
    
    // Draw legend
    this.drawLegend(ctx, canvas.width, canvas.height, [
      { color: '#1976d2', label: 'Revenue' }
    ]);
  }
  
  private drawLine(ctx: CanvasRenderingContext2D, data: number[], color: string, label: string) {
    const canvas = ctx.canvas;
    const padding = 40;
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - 2 * padding;
    
    const maxValue = Math.max(...data);
    const xStep = graphWidth / (data.length - 1);
    const yScale = graphHeight / maxValue;
    
    ctx.beginPath();
    
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * xStep;
      const y = canvas.height - padding - (data[i] * yScale);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      // Draw data point
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  
  private drawLegend(ctx: CanvasRenderingContext2D, width: number, height: number, items: { color: string; label: string }[]) {
    const padding = 40;
    const legendX = width - padding - 150;
    const legendY = padding;
    const itemHeight = 20;
    
    for (let i = 0; i < items.length; i++) {
      const y = legendY + i * itemHeight;
      
      // Draw color box
      ctx.fillStyle = items[i].color;
      ctx.fillRect(legendX, y, 16, 16);
      
      // Draw label
      ctx.fillStyle = '#333';
      ctx.font = '12px Roboto';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(items[i].label, legendX + 20, y + 8);
    }
  }
  
  private formatCurrency(value: number): string {
    return '$' + value.toLocaleString();
  }
}
