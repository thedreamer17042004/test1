import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Tabs</h2>
      
      <!-- Basic Tabs -->
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Basic Tabs</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Tab 1">
              <div class="tab-content">
                <h3>Tab 1 Content</h3>
                <p>This is the content of Tab 1. You can put any content here.</p>
              </div>
            </mat-tab>
            <mat-tab label="Tab 2">
              <div class="tab-content">
                <h3>Tab 2 Content</h3>
                <p>This is the content of Tab 2. Each tab can have different content.</p>
              </div>
            </mat-tab>
            <mat-tab label="Tab 3">
              <div class="tab-content">
                <h3>Tab 3 Content</h3>
                <p>This is the content of Tab 3. Tabs are useful for organizing content.</p>
              </div>
            </mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
      
      <!-- Tabs with Icons -->
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Tabs with Icons</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Dashboard">
              <ng-template matTabLabel>
                <mat-icon>dashboard</mat-icon> Dashboard
              </ng-template>
              <div class="tab-content">
                <p>Dashboard overview with key metrics and statistics.</p>
              </div>
            </mat-tab>
            <mat-tab label="Products">
              <ng-template matTabLabel>
                <mat-icon>inventory</mat-icon> Products
              </ng-template>
              <div class="tab-content">
                <p>Product catalog management and inventory tracking.</p>
              </div>
            </mat-tab>
            <mat-tab label="Orders">
              <ng-template matTabLabel>
                <mat-icon>shopping_cart</mat-icon> Orders
              </ng-template>
              <div class="tab-content">
                <p>Order processing and management system.</p>
              </div>
            </mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
      
      <!-- Dynamic Tabs -->
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Dynamic Tabs</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tab-group (selectedTabChange)="onTabChange($event)">
            <mat-tab *ngFor="let tab of dynamicTabs" [label]="tab.title">
              <div class="tab-content">
                <h3>{{ tab.title }}</h3>
                <p>{{ tab.content }}</p>
              </div>
            </mat-tab>
          </mat-tab-group>
          
          <div class="mt-20">
            <button mat-raised-button color="primary" (click)="addTab()">
              <mat-icon>add</mat-icon> Add Tab
            </button>
            <button mat-button color="warn" (click)="removeTab()" [disabled]="dynamicTabs.length <= 1">
              <mat-icon>remove</mat-icon> Remove Tab
            </button>
          </div>
          
          <p class="mt-20"><strong>Selected Tab Index:</strong> {{ selectedTabIndex }}</p>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Basic tabs with text labels</li>
          <li>Tabs with icons</li>
          <li>Dynamic tabs (add/remove)</li>
          <li>Tab selection event handling</li>
          <li>Responsive design</li>
          <li>Custom tab content</li>
          <li>Material Design styling</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .tab-content {
      padding: 20px;
    }
    
    mat-tab-group {
      width: 100%;
    }
    
    .mt-20 {
      margin-top: 20px;
    }
  `]
})
export class TabsComponent {
  selectedTabIndex = 0;
  
  dynamicTabs = [
    { title: 'Dynamic Tab 1', content: 'Content for dynamic tab 1' },
    { title: 'Dynamic Tab 2', content: 'Content for dynamic tab 2' },
    { title: 'Dynamic Tab 3', content: 'Content for dynamic tab 3' }
  ];
  
  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
  }
  
  addTab() {
    const newIndex = this.dynamicTabs.length + 1;
    this.dynamicTabs.push({
      title: `Dynamic Tab ${newIndex}`,
      content: `Content for dynamic tab ${newIndex}`
    });
  }
  
  removeTab() {
    if (this.dynamicTabs.length > 1) {
      this.dynamicTabs.pop();
    }
  }
}
