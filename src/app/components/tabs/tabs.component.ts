import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTabsModule, DxTabPanelModule } from 'devextreme-angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, DxTabsModule, DxTabPanelModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Tabs Components</h2>
      
      <!-- Simple Tabs -->
      <div class="component-card mb-20">
        <h3>Simple Tabs</h3>
        <dx-tabs
          [dataSource]="simpleTabs"
          [height]="300"
          [width]="100%"
          [scrollingEnabled]="true"
          [showNavButtons]="true"
          (onSelectionChanged)="onTabSelected($event)"
        >
          <div *dxTemplate="let tab of 'content'">
            <div class="tab-content">
              <h4>{{ tab.title }}</h4>
              <p>{{ tab.content }}</p>
            </div>
          </div>
        </dx-tabs>
        <p class="mt-20"><strong>Selected Tab:</strong> {{ selectedSimpleTab || 'None' }}</p>
      </div>
      
      <!-- Tabs with Icons -->
      <div class="component-card mb-20">
        <h3>Tabs with Icons</h3>
        <dx-tabs
          [dataSource]="iconTabs"
          [height]="300"
          [width]="100%"
          [iconPosition]="'top'"
          [selectionMode]="'single'"
        >
          <div *dxTemplate="let tab of 'content'">
            <div class="tab-content">
              <h4><i class="dx-icon {{ tab.icon }}"></i> {{ tab.title }}</h4>
              <p>{{ tab.content }}</p>
            </div>
          </div>
        </dx-tabs>
      </div>
      
      <!-- TabPanel (Tabs with Content Panels) -->
      <div class="component-card mb-20">
        <h3>TabPanel (Tabs with Content Panels)</h3>
        <dx-tab-panel
          [dataSource]="tabPanelItems"
          [height]="400"
          [width]="100%"
          [loop]="false"
          [animationEnabled]="true"
          [swipeEnabled]="true"
          (onSelectionChanged)="onTabPanelSelected($event)"
        >
          <div *dxTemplate="let item of 'title'">
            <span class="dx-icon {{ item.icon }}"></span>
            <span>{{ item.title }}</span>
          </div>
          
          <div *dxTemplate="let item of 'content'">
            <div class="tab-panel-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.content }}</p>
              <div *ngIf="item.details" class="details-section">
                <h5>Details:</h5>
                <ul>
                  <li *ngFor="let detail of item.details">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </div>
        </dx-tab-panel>
        <p class="mt-20"><strong>Selected Panel:</strong> {{ selectedTabPanel || 'None' }}</p>
      </div>
      
      <!-- Vertical Tabs -->
      <div class="component-card">
        <h3>Vertical Tabs</h3>
        <dx-tabs
          [dataSource]="verticalTabs"
          [height]="400"
          [width]="100%"
          [orientation]="'vertical'"
          [tabPosition]="'left'"
          [selectionMode]="'single'"
        >
          <div *dxTemplate="let tab of 'content'">
            <div class="tab-content">
              <h4>{{ tab.title }}</h4>
              <p>{{ tab.content }}</p>
            </div>
          </div>
        </dx-tabs>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Simple tabs with text content</li>
          <li>Tabs with icons</li>
          <li>TabPanel with separate title and content templates</li>
          <li>Vertical tabs layout</li>
          <li>Scrolling and navigation buttons</li>
          <li>Swipe gestures (for touch devices)</li>
          <li>Animation between tabs</li>
          <li>Selection event handling</li>
          <li>Custom templates for tab content</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .tab-content {
      padding: 20px;
      height: 100%;
      overflow-y: auto;
    }
    
    .tab-panel-content {
      padding: 20px;
      height: 100%;
      overflow-y: auto;
    }
    
    .details-section {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #eee;
    }
    
    .details-section h5 {
      margin-bottom: 10px;
      color: #666;
    }
    
    .details-section ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .details-section li {
      margin-bottom: 5px;
    }
  `]
})
export class TabsComponent {
  selectedSimpleTab = '';
  selectedTabPanel = '';

  simpleTabs = [
    { title: 'Tab 1', content: 'This is the content of Tab 1. Simple text content displayed here.' },
    { title: 'Tab 2', content: 'Content for Tab 2 goes here. You can put any content in each tab.' },
    { title: 'Tab 3', content: 'Tab 3 content. Each tab can have different content and functionality.' },
    { title: 'Tab 4', content: 'More content in Tab 4. Tabs are useful for organizing content.' },
    { title: 'Tab 5', content: 'Final tab with content. You can add as many tabs as needed.' }
  ];

  iconTabs = [
    { title: 'Dashboard', icon: 'home', content: 'Dashboard overview with key metrics and statistics.' },
    { title: 'Products', icon: 'product', content: 'Product catalog management and inventory tracking.' },
    { title: 'Orders', icon: 'cart', content: 'Order processing and management system.' },
    { title: 'Customers', icon: 'user', content: 'Customer relationship management and profiles.' },
    { title: 'Reports', icon: 'chart', content: 'Comprehensive reporting and analytics tools.' }
  ];

  tabPanelItems = [
    {
      title: 'Personal Info',
      icon: 'user',
      content: 'Manage your personal information and profile settings.',
      details: ['Name', 'Email', 'Phone', 'Address']
    },
    {
      title: 'Security',
      icon: 'lock',
      content: 'Configure security settings and authentication options.',
      details: ['Password', 'Two-factor authentication', 'Login history', 'Security questions']
    },
    {
      title: 'Notifications',
      icon: 'bell',
      content: 'Set up notification preferences and alerts.',
      details: ['Email notifications', 'Push notifications', 'SMS alerts', 'Notification frequency']
    },
    {
      title: 'Privacy',
      icon: 'shield',
      content: 'Control your privacy settings and data sharing preferences.',
      details: ['Data sharing', 'Cookie settings', 'Privacy policy', 'Data export']
    }
  ];

  verticalTabs = [
    { title: 'Section 1', content: 'Content for vertical tab section 1.' },
    { title: 'Section 2', content: 'Content for vertical tab section 2.' },
    { title: 'Section 3', content: 'Content for vertical tab section 3.' },
    { title: 'Section 4', content: 'Content for vertical tab section 4.' }
  ];

  onTabSelected(event: any) {
    this.selectedSimpleTab = event.selectedItem.title;
  }

  onTabPanelSelected(event: any) {
    this.selectedTabPanel = event.selectedItem.title;
  }
}
