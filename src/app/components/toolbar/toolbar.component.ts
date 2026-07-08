import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxToolbarModule, DxButtonModule, DxSelectBoxModule, DxTextBoxModule, DxDateBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, DxToolbarModule, DxButtonModule, DxSelectBoxModule, DxTextBoxModule, DxDateBoxModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Toolbar Components</h2>
      
      <!-- Basic Toolbar -->
      <div class="component-card mb-20">
        <h3>Basic Toolbar</h3>
        <dx-toolbar>
          <dxi-item [widget]="'button'" [options]="{ text: 'New', icon: 'add', type: 'default' }" (onClick)="onNewClick()" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Save', icon: 'save', type: 'success' }" (onClick)="onSaveClick()" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Delete', icon: 'trash', type: 'danger' }" (onClick)="onDeleteClick()" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Refresh', icon: 'refresh', type: 'normal' }" (onClick)="onRefreshClick()" />
          <dxi-item [location]="'after'" [widget]="'button'" [options]="{ icon: 'menu', type: 'normal' }" />
        </dx-toolbar>
        <p class="mt-20"><strong>Last Action:</strong> {{ lastAction || 'None' }}</p>
      </div>
      
      <!-- Toolbar with Menu -->
      <div class="component-card mb-20">
        <h3>Toolbar with Menu</h3>
        <dx-toolbar>
          <dxi-item [widget]="'button'" [options]="{ text: 'File', icon: 'file' }" [menuItems]="fileMenuItems" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Edit', icon: 'edit' }" [menuItems]="editMenuItems" />
          <dxi-item [widget]="'button'" [options]="{ text: 'View', icon: 'eye' }" [menuItems]="viewMenuItems" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Help', icon: 'help' }" [menuItems]="helpMenuItems" />
        </dx-toolbar>
      </div>
      
      <!-- Toolbar with Form Elements -->
      <div class="component-card mb-20">
        <h3>Toolbar with Form Elements</h3>
        <dx-toolbar>
          <dxi-item [widget]="'textBox'" [options]="{ placeholder: 'Search...', width: 200 }" />
          <dxi-item [widget]="'selectBox'" [options]="{ dataSource: categories, placeholder: 'Category', width: 150 }" />
          <dxi-item [widget]="'dateBox'" [options]="{ placeholder: 'Date', width: 150, displayFormat: 'd/M/yyyy' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Search', icon: 'search', type: 'success' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Clear', icon: 'clear', type: 'normal' }" />
        </dx-toolbar>
      </div>
      
      <!-- Toolbar with Custom Items -->
      <div class="component-card mb-20">
        <h3>Toolbar with Custom Items</h3>
        <dx-toolbar>
          <dxi-item [text]="'Brand Name'" [location]="'before'" />
          <dxi-item [widget]="'button'" [options]="{ icon: 'menu', type: 'normal' }" [location]="'before'" />
          
          <dxi-item [widget]="'button'" [options]="{ text: 'Home', icon: 'home', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Products', icon: 'product', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Orders', icon: 'cart', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Customers', icon: 'user', type: 'normal' }" />
          
          <dxi-item [widget]="'button'" [options]="{ icon: 'user', type: 'normal' }" [location]="'after'" />
          <dxi-item [widget]="'button'" [options]="{ icon: 'bell', type: 'normal' }" [location]="'after'" />
          <dxi-item [widget]="'button'" [options]="{ icon: 'gear', type: 'normal' }" [location]="'after'" />
        </dx-toolbar>
      </div>
      
      <!-- Multi-line Toolbar -->
      <div class="component-card">
        <h3>Multi-line Toolbar</h3>
        <dx-toolbar>
          <dxi-item [widget]="'button'" [options]="{ text: 'Bold', icon: 'bold', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Italic', icon: 'italic', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Underline', icon: 'underline', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Strike', icon: 'strikethrough', type: 'normal' }" />
          <dxi-item [beginGroup]="true" [widget]="'button'" [options]="{ text: 'Align Left', icon: 'alignleft', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Align Center', icon: 'aligncenter', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Align Right', icon: 'alignright', type: 'normal' }" />
          <dxi-item [beginGroup]="true" [widget]="'button'" [options]="{ text: 'Bullet List', icon: 'bulletlist', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Number List', icon: 'numberlist', type: 'normal' }" />
          <dxi-item [beginGroup]="true" [widget]="'button'" [options]="{ text: 'Undo', icon: 'undo', type: 'normal' }" />
          <dxi-item [widget]="'button'" [options]="{ text: 'Redo', icon: 'redo', type: 'normal' }" />
        </dx-toolbar>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Basic toolbar with buttons</li>
          <li>Toolbar with dropdown menus</li>
          <li>Toolbar with form elements (textbox, selectbox, datebox)</li>
          <li>Custom toolbar items and branding</li>
          <li>Multi-line toolbar with grouped items</li>
          <li>Item positioning (before, center, after)</li>
          <li>Icons and text on buttons</li>
          <li>Event handling for toolbar items</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class ToolbarComponent {
  lastAction = '';
  categories = ['All', 'Electronics', 'Clothing', 'Books', 'Toys'];

  fileMenuItems = [
    { text: 'New', icon: 'add' },
    { text: 'Open', icon: 'folder' },
    { text: 'Save', icon: 'save' },
    { text: 'Save As', icon: 'save' },
    { text: 'Print', icon: 'print' },
    { text: 'Exit', icon: 'exit', beginGroup: true }
  ];

  editMenuItems = [
    { text: 'Undo', icon: 'undo' },
    { text: 'Redo', icon: 'redo' },
    { text: 'Cut', icon: 'cut', beginGroup: true },
    { text: 'Copy', icon: 'copy' },
    { text: 'Paste', icon: 'paste' },
    { text: 'Delete', icon: 'trash', beginGroup: true },
    { text: 'Select All', icon: 'selectall' }
  ];

  viewMenuItems = [
    { text: 'Refresh', icon: 'refresh' },
    { text: 'Zoom In', icon: 'zoomplus' },
    { text: 'Zoom Out', icon: 'zoomminus' },
    { text: 'Reset Zoom', icon: 'zoomreset', beginGroup: true },
    { text: 'Full Screen', icon: 'fullscreen' }
  ];

  helpMenuItems = [
    { text: 'Help', icon: 'help' },
    { text: 'About', icon: 'info' }
  ];

  onNewClick() {
    this.lastAction = 'New clicked';
  }

  onSaveClick() {
    this.lastAction = 'Save clicked';
  }

  onDeleteClick() {
    this.lastAction = 'Delete clicked';
  }

  onRefreshClick() {
    this.lastAction = 'Refresh clicked';
  }
}
