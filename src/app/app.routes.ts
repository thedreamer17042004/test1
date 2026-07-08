import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'data-grid',
    loadComponent: () => import('./components/data-grid/data-grid.component').then(m => m.DataGridComponent)
  },
  {
    path: 'form',
    loadComponent: () => import('./components/form/form.component').then(m => m.FormComponent)
  },
  {
    path: 'chart',
    loadComponent: () => import('./components/chart/chart.component').then(m => m.ChartComponent)
  },
  {
    path: 'scheduler',
    loadComponent: () => import('./components/scheduler/scheduler.component').then(m => m.SchedulerComponent)
  },
  {
    path: 'tree-view',
    loadComponent: () => import('./components/tree-view/tree-view.component').then(m => m.TreeViewComponent)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./components/tabs/tabs.component').then(m => m.TabsComponent)
  },
  {
    path: 'popup',
    loadComponent: () => import('./components/popup/popup.component').then(m => m.PopupComponent)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('./components/toolbar/toolbar.component').then(m => m.ToolbarComponent)
  },
  {
    path: 'menu',
    loadComponent: () => import('./components/menu/menu.component').then(m => m.MenuComponent)
  },
  {
    path: 'button',
    loadComponent: () => import('./components/button/button.component').then(m => m.ButtonComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
