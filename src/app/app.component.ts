import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar color="primary" class="nav-menu">
      <span>Custom Angular Components</span>
      <span class="spacer"></span>
      <a routerLink="/" routerLinkActive="active" mat-button>
        <mat-icon>home</mat-icon> Home
      </a>
      <a routerLink="/data-grid" routerLinkActive="active" mat-button>
        <mat-icon>grid_view</mat-icon> Data Grid
      </a>
      <a routerLink="/form" routerLinkActive="active" mat-button>
        <mat-icon>description</mat-icon> Form
      </a>
      <a routerLink="/chart" routerLinkActive="active" mat-button>
        <mat-icon>bar_chart</mat-icon> Chart
      </a>
      <a routerLink="/scheduler" routerLinkActive="active" mat-button>
        <mat-icon>calendar_today</mat-icon> Scheduler
      </a>
      <a routerLink="/tree-view" routerLinkActive="active" mat-button>
        <mat-icon>account_tree</mat-icon> Tree View
      </a>
      <a routerLink="/tabs" routerLinkActive="active" mat-button>
        <mat-icon>tab</mat-icon> Tabs
      </a>
      <a routerLink="/popup" routerLinkActive="active" mat-button>
        <mat-icon>open_in_new</mat-icon> Popup
      </a>
      <a routerLink="/toolbar" routerLinkActive="active" mat-button>
        <mat-icon>toys</mat-icon> Toolbar
      </a>
      <a routerLink="/menu" routerLinkActive="active" mat-button>
        <mat-icon>menu</mat-icon> Menu
      </a>
      <a routerLink="/button" routerLinkActive="active" mat-button>
        <mat-icon>smart_button</mat-icon> Button
      </a>
    </mat-toolbar>
    
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .nav-menu {
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    a {
      color: white;
      text-decoration: none;
    }
    
    a.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
    
    .app-content {
      padding: 20px;
      min-height: calc(100vh - 64px);
    }
  `]
})
export class AppComponent {
  title = 'Custom Angular Components';
}
