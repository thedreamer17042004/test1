import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="component-container">
      <h1 class="component-title">Custom Angular Components Demo</h1>
      <p>This is a collection of custom-built components inspired by DevExtreme, using Angular Material and pure CSS.</p>
      
      <div class="app-grid">
        <mat-card *ngFor="let component of components" [routerLink]="component.path" class="component-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>{{ component.icon }}</mat-icon> {{ component.name }}
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>{{ component.description }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    mat-card {
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    mat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
    
    mat-icon {
      margin-right: 8px;
      color: #1976d2;
    }
  `]
})
export class HomeComponent {
  components = [
    { name: 'Data Grid', path: '/data-grid', icon: 'grid_view', description: 'Powerful data grid with sorting, filtering, and paging' },
    { name: 'Form', path: '/form', icon: 'description', description: 'Form components with validation and layout' },
    { name: 'Chart', path: '/chart', icon: 'bar_chart', description: 'Interactive charts and visualizations' },
    { name: 'Scheduler', path: '/scheduler', icon: 'calendar_today', description: 'Calendar and scheduling component' },
    { name: 'Tree View', path: '/tree-view', icon: 'account_tree', description: 'Hierarchical data display' },
    { name: 'Tabs', path: '/tabs', icon: 'tab', description: 'Tabbed interface component' },
    { name: 'Popup', path: '/popup', icon: 'open_in_new', description: 'Modal and popup windows' },
    { name: 'Toolbar', path: '/toolbar', icon: 'toys', description: 'Customizable toolbar component' },
    { name: 'Menu', path: '/menu', icon: 'menu', description: 'Navigation menu component' },
    { name: 'Button', path: '/button', icon: 'smart_button', description: 'Various button styles and types' }
  ];
}
