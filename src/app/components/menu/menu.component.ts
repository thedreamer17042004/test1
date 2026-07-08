import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxMenuModule, DxContextMenuModule, DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, DxMenuModule, DxContextMenuModule, DxButtonModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Menu Components</h2>
      
      <!-- Horizontal Menu -->
      <div class="component-card mb-20">
        <h3>Horizontal Menu</h3>
        <dx-menu
          [items]="mainMenuItems"
          [orientation]="'horizontal'"
          [showFirstSubmenuMode]="{ name: 'onHover', delay: { show: 0, hide: 500 } }"
          (onItemClick)="onMenuItemClick($event)"
        />
        <p class="mt-20"><strong>Selected Item:</strong> {{ selectedMenuItem || 'None' }}</p>
      </div>
      
      <!-- Vertical Menu -->
      <div class="component-card mb-20">
        <h3>Vertical Menu</h3>
        <div style="display: flex; gap: 20px;">
          <dx-menu
            [items]="verticalMenuItems"
            [orientation]="'vertical'"
            [showFirstSubmenuMode]="{ name: 'onClick' }"
            (onItemClick)="onMenuItemClick($event)"
          />
          
          <div class="menu-content">
            <p>Click on menu items to see the selection.</p>
            <p>Submenus open on click for vertical orientation.</p>
          </div>
        </div>
      </div>
      
      <!-- Context Menu -->
      <div class="component-card mb-20">
        <h3>Context Menu (Right-click on the area below)</h3>
        <div 
          style="border: 1px dashed #ccc; height: 200px; padding: 20px; background: #f9f9f9;"
          (contextmenu)="onContextMenu($event)"
        >
          <p>Right-click anywhere in this area to open the context menu.</p>
          <p><strong>Selected Context Item:</strong> {{ selectedContextItem || 'None' }}</p>
        </div>
        
        <dx-context-menu
          [(visible)]="contextMenuVisible"
          [target]="'#contextMenuTarget'"
          [items]="contextMenuItems"
          [position]="{ of: '#contextMenuTarget', offset: { x: 0, y: 0 } }"
          (onItemClick)="onContextMenuItemClick($event)"
        />
        <div id="contextMenuTarget" style="display: none;"></div>
      </div>
      
      <!-- Menu with Icons -->
      <div class="component-card mb-20">
        <h3>Menu with Icons</h3>
        <dx-menu
          [items]="iconMenuItems"
          [orientation]="'horizontal'"
          [showFirstSubmenuMode]="{ name: 'onHover' }"
          [displayExpr]="'text'"
          [iconExpr]="'icon'"
        />
      </div>
      
      <!-- Menu with Custom Templates -->
      <div class="component-card mb-20">
        <h3>Menu with Custom Templates</h3>
        <dx-menu [items]="customMenuItems" [orientation]="'horizontal'">
          <div *dxTemplate="let item of 'item'">
            <span class="dx-icon {{ item.icon }}"></span>
            <span style="margin-left: 8px;" class="dx-menu-item-text">{{ item.text }}</span>
            <span *ngIf="item.badge" style="margin-left: 8px;" class="badge">{{ item.badge }}</span>
          </div>
        </dx-menu>
      </div>
      
      <!-- Menu with Disabled Items -->
      <div class="component-card">
        <h3>Menu with Disabled Items</h3>
        <dx-menu
          [items]="disabledMenuItems"
          [orientation]="'horizontal'"
          [showFirstSubmenuMode]="{ name: 'onHover' }"
        />
        <p class="mt-20">Some menu items are disabled and cannot be clicked.</p>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Horizontal menu layout</li>
          <li>Vertical menu layout</li>
          <li>Context menu (right-click)</li>
          <li>Menu with icons</li>
          <li>Custom menu item templates</li>
          <li>Disabled menu items</li>
          <li>Submenu display modes (hover, click)</li>
          <li>Event handling for menu items</li>
          <li>Menu item selection</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .menu-content {
      flex: 1;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    
    .badge {
      background: #ff4081;
      color: white;
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 12px;
    }
  `]
})
export class MenuComponent {
  selectedMenuItem = '';
  selectedContextItem = '';
  contextMenuVisible = false;
  contextMenuPosition = { x: 0, y: 0 };

  mainMenuItems = [
    {
      text: 'File',
      items: [
        { text: 'New', icon: 'add' },
        { text: 'Open', icon: 'folder' },
        { text: 'Save', icon: 'save' },
        { text: 'Save As', icon: 'save' },
        { text: 'Print', icon: 'print' },
        { text: 'Exit', icon: 'exit', beginGroup: true }
      ]
    },
    {
      text: 'Edit',
      items: [
        { text: 'Undo', icon: 'undo' },
        { text: 'Redo', icon: 'redo' },
        { text: 'Cut', icon: 'cut', beginGroup: true },
        { text: 'Copy', icon: 'copy' },
        { text: 'Paste', icon: 'paste' },
        { text: 'Delete', icon: 'trash', beginGroup: true },
        { text: 'Select All', icon: 'selectall' }
      ]
    },
    {
      text: 'View',
      items: [
        { text: 'Refresh', icon: 'refresh' },
        { text: 'Zoom In', icon: 'zoomplus' },
        { text: 'Zoom Out', icon: 'zoomminus' },
        { text: 'Reset Zoom', icon: 'zoomreset', beginGroup: true },
        { text: 'Full Screen', icon: 'fullscreen' }
      ]
    },
    {
      text: 'Help',
      items: [
        { text: 'Help', icon: 'help' },
        { text: 'About', icon: 'info' }
      ]
    }
  ];

  verticalMenuItems = [
    {
      text: 'Dashboard',
      icon: 'home'
    },
    {
      text: 'Products',
      icon: 'product',
      items: [
        { text: 'All Products', icon: 'group' },
        { text: 'Categories', icon: 'folder' },
        { text: 'Inventory', icon: 'inventory' }
      ]
    },
    {
      text: 'Orders',
      icon: 'cart',
      items: [
        { text: 'New Orders', icon: 'add' },
        { text: 'Order History', icon: 'history' }
      ]
    },
    {
      text: 'Customers',
      icon: 'user',
      items: [
        { text: 'Customer List', icon: 'group' },
        { text: 'Customer Groups', icon: 'folder' }
      ]
    },
    {
      text: 'Reports',
      icon: 'chart',
      items: [
        { text: 'Sales Report', icon: 'money' },
        { text: 'Inventory Report', icon: 'inventory' }
      ]
    },
    {
      text: 'Settings',
      icon: 'gear',
      items: [
        { text: 'User Management', icon: 'user' },
        { text: 'System Settings', icon: 'gear' }
      ]
    }
  ];

  contextMenuItems = [
    { text: 'Copy', icon: 'copy' },
    { text: 'Paste', icon: 'paste' },
    { text: 'Cut', icon: 'cut' },
    { text: 'Delete', icon: 'trash', beginGroup: true },
    { text: 'Select All', icon: 'selectall' }
  ];

  iconMenuItems = [
    { text: 'Dashboard', icon: 'home' },
    { text: 'Products', icon: 'product' },
    { text: 'Orders', icon: 'cart' },
    { text: 'Customers', icon: 'user' },
    { text: 'Reports', icon: 'chart' },
    { text: 'Settings', icon: 'gear' }
  ];

  customMenuItems = [
    { text: 'Inbox', icon: 'email', badge: '12' },
    { text: 'Notifications', icon: 'bell', badge: '5' },
    { text: 'Messages', icon: 'message', badge: '8' },
    { text: 'Tasks', icon: 'task', badge: '3' }
  ];

  disabledMenuItems = [
    { text: 'File', items: [{ text: 'New' }, { text: 'Open' }, { text: 'Save', disabled: true }] },
    { text: 'Edit', items: [{ text: 'Undo' }, { text: 'Redo', disabled: true }, { text: 'Cut' }] },
    { text: 'View', items: [{ text: 'Refresh' }, { text: 'Zoom In', disabled: true }] }
  ];

  onMenuItemClick(event: any) {
    this.selectedMenuItem = event.itemData.text;
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    this.contextMenuVisible = true;
  }

  onContextMenuItemClick(event: any) {
    this.selectedContextItem = event.itemData.text;
    this.contextMenuVisible = false;
  }
}
