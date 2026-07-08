import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule } from 'devextreme-angular';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule, DxTreeViewModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Tree View</h2>
      
      <div class="dx-card mb-20">
        <h3>File Explorer</h3>
        <dx-tree-view
          [dataSource]="fileSystem"
          [height]="400"
          [width]="100%"
          [showCheckBoxes]="true"
          [selectNodesRecursive]="false"
          [searchEnabled]="true"
          [searchMode]="'contains'"
          [searchTimeout]="300"
          [placeholder]="'Search files...'"
          (onItemClick)="onItemClick($event)"
          (onItemSelectionChanged)="onSelectionChanged($event)"
          (onItemExpanded)="onItemExpanded($event)"
        >
          <dxo-selection [mode]="'multiple'" />
          <dxo-search [visible]="true" />
          <dxo-toolbar [visible]="true">
            <dxi-item name="expandAll" />
            <dxi-item name="collapseAll" />
          </dxo-toolbar>
        </dx-tree-view>
        
        <div class="mt-20">
          <p><strong>Selected Items:</strong> {{ selectedItems.join(', ') || 'None' }}</p>
          <p><strong>Last Clicked:</strong> {{ lastClicked || 'None' }}</p>
        </div>
      </div>
      
      <div class="dx-card mb-20">
        <h3>Organization Chart</h3>
        <dx-tree-view
          [dataSource]="organization"
          [height]="400"
          [width]="100%"
          [keyExpr]="'id'"
          [displayExpr]="'name'"
          [parentIdExpr]="'parentId'"
          [hasItemsExpr]="'hasChildren'"
          [expandedExpr]="'expanded'"
          [showCheckBoxes]="false"
          [selectNodesRecursive]="false"
        >
          <dxo-selection [mode]="'single'" />
        </dx-tree-view>
      </div>
      
      <div class="dx-card">
        <h3>Custom Icons Tree</h3>
        <dx-tree-view
          [dataSource]="menuItems"
          [height]="400"
          [width]="100%"
          [keyExpr]="'id'"
          [displayExpr]="'text'"
          [parentIdExpr]="'parentId'"
          [hasItemsExpr]="'items.length'"
          [showCheckBoxes]="false"
        >
          <dxi-item *ngFor="let item of menuItems" [key]="item.id">
            <dxo-icon [cssClass]="item.icon" />
          </dxi-item>
        </dx-tree-view>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Hierarchical data display</li>
          <li>Check boxes for selection</li>
          <li>Multiple selection modes</li>
          <li>Search functionality</li>
          <li>Toolbar with expand/collapse all</li>
          <li>Custom data source formats</li>
          <li>Custom icons</li>
          <li>Event handling (click, selection, expand)</li>
          <li>Lazy loading support</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class TreeViewComponent {
  selectedItems: string[] = [];
  lastClicked = '';

  fileSystem = [
    {
      id: 1,
      text: 'Documents',
      expanded: true,
      items: [
        {
          id: 2,
          text: 'Projects',
          expanded: true,
          items: [
            { id: 3, text: 'Project1.docx', items: [] },
            { id: 4, text: 'Project2.xlsx', items: [] },
            { id: 5, text: 'Project3.pptx', items: [] }
          ]
        },
        {
          id: 6,
          text: 'Reports',
          expanded: false,
          items: [
            { id: 7, text: 'Annual Report.pdf', items: [] },
            { id: 8, text: 'Quarterly Report.pdf', items: [] }
          ]
        },
        { id: 9, text: 'Notes.txt', items: [] }
      ]
    },
    {
      id: 10,
      text: 'Pictures',
      expanded: false,
      items: [
        {
          id: 11,
          text: 'Vacation',
          expanded: false,
          items: [
            { id: 12, text: 'Photo1.jpg', items: [] },
            { id: 13, text: 'Photo2.jpg', items: [] }
          ]
        },
        { id: 14, text: 'Work', items: [] }
      ]
    },
    {
      id: 15,
      text: 'Downloads',
      expanded: false,
      items: [
        { id: 16, text: 'Software', items: [] },
        { id: 17, text: 'Drivers', items: [] }
      ]
    }
  ];

  organization = [
    { id: 1, name: 'CEO', parentId: null, hasChildren: true, expanded: true },
    { id: 2, name: 'CTO', parentId: 1, hasChildren: true, expanded: true },
    { id: 3, name: 'CFO', parentId: 1, hasChildren: true, expanded: false },
    { id: 4, name: 'Development Manager', parentId: 2, hasChildren: true, expanded: true },
    { id: 5, name: 'QA Manager', parentId: 2, hasChildren: true, expanded: false },
    { id: 6, name: 'Senior Developer', parentId: 4, hasChildren: false, expanded: false },
    { id: 7, name: 'Junior Developer', parentId: 4, hasChildren: false, expanded: false },
    { id: 8, name: 'QA Engineer', parentId: 5, hasChildren: false, expanded: false },
    { id: 9, name: 'Accounting', parentId: 3, hasChildren: false, expanded: false },
    { id: 10, name: 'Finance', parentId: 3, hasChildren: false, expanded: false }
  ];

  menuItems = [
    { id: 1, text: 'Dashboard', parentId: null, icon: 'dx-icon-home', items: [] },
    { id: 2, text: 'Products', parentId: null, icon: 'dx-icon-product', items: [
      { id: 3, text: 'All Products', parentId: 2, icon: 'dx-icon-group', items: [] },
      { id: 4, text: 'Categories', parentId: 2, icon: 'dx-icon-folder', items: [] },
      { id: 5, text: 'Inventory', parentId: 2, icon: 'dx-icon-inventory', items: [] }
    ] },
    { id: 6, text: 'Orders', parentId: null, icon: 'dx-icon-cart', items: [
      { id: 7, text: 'New Orders', parentId: 6, icon: 'dx-icon-add', items: [] },
      { id: 8, text: 'Order History', parentId: 6, icon: 'dx-icon-history', items: [] }
    ] },
    { id: 9, text: 'Customers', parentId: null, icon: 'dx-icon-user', items: [
      { id: 10, text: 'Customer List', parentId: 9, icon: 'dx-icon-group', items: [] },
      { id: 11, text: 'Customer Groups', parentId: 9, icon: 'dx-icon-folder', items: [] }
    ] },
    { id: 12, text: 'Reports', parentId: null, icon: 'dx-icon-chart', items: [
      { id: 13, text: 'Sales Report', parentId: 12, icon: 'dx-icon-money', items: [] },
      { id: 14, text: 'Inventory Report', parentId: 12, icon: 'dx-icon-inventory', items: [] }
    ] },
    { id: 15, text: 'Settings', parentId: null, icon: 'dx-icon-gear', items: [
      { id: 16, text: 'User Management', parentId: 15, icon: 'dx-icon-user', items: [] },
      { id: 17, text: 'System Settings', parentId: 15, icon: 'dx-icon-gear', items: [] }
    ] }
  ];

  onItemClick(event: any) {
    this.lastClicked = event.itemData.text;
  }

  onSelectionChanged(event: any) {
    this.selectedItems = event.selectedItems.map((item: any) => item.text);
  }

  onItemExpanded(event: any) {
    console.log('Expanded:', event.itemData.text);
  }
}
