import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="dx-theme">
      <nav class="nav-menu">
        <a routerLink="/" routerLinkActive="active">Home</a>
        <a routerLink="/data-grid" routerLinkActive="active">Data Grid</a>
        <a routerLink="/form" routerLinkActive="active">Form</a>
        <a routerLink="/chart" routerLinkActive="active">Chart</a>
        <a routerLink="/scheduler" routerLinkActive="active">Scheduler</a>
        <a routerLink="/tree-view" routerLinkActive="active">Tree View</a>
        <a routerLink="/tabs" routerLinkActive="active">Tabs</a>
        <a routerLink="/popup" routerLinkActive="active">Popup</a>
        <a routerLink="/toolbar" routerLinkActive="active">Toolbar</a>
        <a routerLink="/menu" routerLinkActive="active">Menu</a>
        <a routerLink="/button" routerLinkActive="active">Button</a>
      </nav>
      
      <div class="app-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app-content {
      padding: 20px;
      height: calc(100vh - 64px);
      overflow-y: auto;
    }
  `]
})
export class AppComponent {
  title = 'DevExtreme Angular Components';
}
