import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="component-container">
      <h1 class="component-title">DevExtreme Angular Components Demo</h1>
      <p>This is a collection of DevExtreme components implemented in Angular 19.</p>
      
      <div class="app-grid">
        <div class="component-card" *ngFor="let component of components" [routerLink]="component.path">
          <h3>{{ component.name }}</h3>
          <p>{{ component.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  components = [
    { name: 'Data Grid', path: '/data-grid', description: 'Powerful data grid with sorting, filtering, and paging' },
    { name: 'Form', path: '/form', description: 'Form components with validation and layout' },
    { name: 'Chart', path: '/chart', description: 'Interactive charts and visualizations' },
    { name: 'Scheduler', path: '/scheduler', description: 'Calendar and scheduling component' },
    { name: 'Tree View', path: '/tree-view', description: 'Hierarchical data display' },
    { name: 'Tabs', path: '/tabs', description: 'Tabbed interface component' },
    { name: 'Popup', path: '/popup', description: 'Modal and popup windows' },
    { name: 'Toolbar', path: '/toolbar', description: 'Customizable toolbar component' },
    { name: 'Menu', path: '/menu', description: 'Navigation menu component' },
    { name: 'Button', path: '/button', description: 'Various button styles and types' }
  ];
}
