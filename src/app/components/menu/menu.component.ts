import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Menu</h2>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Horizontal Menu</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-toolbar color="primary">
            <button mat-button [matMenuTriggerFor]="fileMenu">
              <mat-icon>description</mat-icon> File
            </button>
            <mat-menu #fileMenu="matMenu">
              <button mat-menu-item (click)="onMenuClick('New')">
                <mat-icon>add</mat-icon> New
              </button>
              <button mat-menu-item (click)="onMenuClick('Open')">
                <mat-icon>folder_open</mat-icon> Open
              </button>
              <button mat-menu-item (click)="onMenuClick('Save')">
                <mat-icon>save</mat-icon> Save
              </button>
              <button mat-menu-item disabled>
                <mat-icon>save_as</mat-icon> Save As
              </button>
              <mat-divider></mat-divider>
              <button mat-menu-item (click)="onMenuClick('Print')">
                <mat-icon>print</mat-icon> Print
              </button>
              <button mat-menu-item (click)="onMenuClick('Exit')">
                <mat-icon>exit_to_app</mat-icon> Exit
              </button>
            </mat-menu>
            
            <button mat-button [matMenuTriggerFor]="editMenu">
              <mat-icon>edit</mat-icon> Edit
            </button>
            <mat-menu #editMenu="matMenu">
              <button mat-menu-item (click)="onMenuClick('Undo')">
                <mat-icon>undo</mat-icon> Undo
              </button>
              <button mat-menu-item (click)="onMenuClick('Redo')">
                <mat-icon>redo</mat-icon> Redo
              </button>
              <mat-divider></mat-divider>
              <button mat-menu-item (click)="onMenuClick('Cut')">
                <mat-icon>content_cut</mat-icon> Cut
              </button>
              <button mat-menu-item (click)="onMenuClick('Copy')">
                <mat-icon>content_copy</mat-icon> Copy
              </button>
              <button mat-menu-item (click)="onMenuClick('Paste')">
                <mat-icon>content_paste</mat-icon> Paste
              </button>
            </mat-menu>
            
            <button mat-button [matMenuTriggerFor]="viewMenu">
              <mat-icon>visibility</mat-icon> View
            </button>
            <mat-menu #viewMenu="matMenu">
              <button mat-menu-item (click)="onMenuClick('Refresh')">
                <mat-icon>refresh</mat-icon> Refresh
              </button>
              <button mat-menu-item (click)="onMenuClick('Zoom In')">
                <mat-icon>zoom_in</mat-icon> Zoom In
              </button>
              <button mat-menu-item (click)="onMenuClick('Zoom Out')">
                <mat-icon>zoom_out</mat-icon> Zoom Out
              </button>
            </mat-menu>
          </mat-toolbar>
          <p class="mt-20"><strong>Last Menu Item:</strong> {{ lastMenuItem || 'None' }}</p>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Context Menu</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Right-click on the area below to open context menu.</p>
          <div 
            style="border: 2px dashed #ccc; height: 200px; display: flex; justify-content: center; align-items: center; background: #f9f9f9;"
            (contextmenu)="onContextMenu($event)"
          >
            <p>Right-click here for context menu</p>
          </div>
          <p class="mt-20"><strong>Context Menu Item:</strong> {{ contextMenuItem || 'None' }}</p>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Menu with Icons</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <button mat-button [matMenuTriggerFor]="iconMenu">
            <mat-icon>menu</mat-icon> Menu with Icons
          </button>
          <mat-menu #iconMenu="matMenu">
            <button mat-menu-item *ngFor="let item of menuItems" (click)="onMenuClick(item.label)">
              <mat-icon>{{ item.icon }}</mat-icon>
              <span>{{ item.label }}</span>
            </button>
          </mat-menu>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Nested Menu</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <button mat-button [matMenuTriggerFor]="nestedMenu">
            <mat-icon>menu</mat-icon> Nested Menu
          </button>
          <mat-menu #nestedMenu="matMenu">
            <button mat-menu-item [matMenuTriggerFor]="productsMenu">
              <mat-icon>inventory</mat-icon> Products
            </button>
            <mat-menu #productsMenu="matMenu">
              <button mat-menu-item (click)="onMenuClick('All Products')">All Products</button>
              <button mat-menu-item (click)="onMenuClick('Categories')">Categories</button>
              <button mat-menu-item (click)="onMenuClick('Inventory')">Inventory</button>
            </mat-menu>
            
            <button mat-menu-item [matMenuTriggerFor]="ordersMenu">
              <mat-icon>shopping_cart</mat-icon> Orders
            </button>
            <mat-menu #ordersMenu="matMenu">
              <button mat-menu-item (click)="onMenuClick('New Orders')">New Orders</button>
              <button mat-menu-item (click)="onMenuClick('Order History')">Order History</button>
            </mat-menu>
            
            <mat-divider></mat-divider>
            
            <button mat-menu-item (click)="onMenuClick('Settings')">
              <mat-icon>settings</mat-icon> Settings
            </button>
          </mat-menu>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Horizontal menu with dropdown</li>
          <li>Context menu (right-click)</li>
          <li>Menu with icons</li>
          <li>Nested menus (submenus)</li>
          <li>Disabled menu items</li>
          <li>Menu dividers</li>
          <li>Event handling</li>
          <li>Material Design styling</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .mt-20 {
      margin-top: 20px;
    }
  `]
})
export class MenuComponent {
  lastMenuItem = '';
  contextMenuItem = '';
  
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Products', icon: 'inventory' },
    { label: 'Orders', icon: 'shopping_cart' },
    { label: 'Customers', icon: 'people' },
    { label: 'Reports', icon: 'assessment' },
    { label: 'Settings', icon: 'settings' }
  ];
  
  onMenuClick(item: string) {
    this.lastMenuItem = item;
  }
  
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    // In a real app, you would open a context menu at the mouse position
    this.contextMenuItem = 'Context menu would open at: ' + event.clientX + ', ' + event.clientY;
  }
}
