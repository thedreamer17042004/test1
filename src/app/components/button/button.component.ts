import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Buttons</h2>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Button Types</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row">
            <button mat-button (click)="onClick('mat-button')">Mat Button</button>
            <button mat-raised-button (click)="onClick('mat-raised-button')">Raised Button</button>
            <button mat-flat-button (click)="onClick('mat-flat-button')">Flat Button</button>
            <button mat-stroked-button (click)="onClick('mat-stroked-button')">Stroked Button</button>
          </div>
          <p class="mt-20"><strong>Last Clicked:</strong> {{ lastClicked || 'None' }}</p>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Button with Icons</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row">
            <button mat-button (click)="onClick('add')">
              <mat-icon>add</mat-icon> Add
            </button>
            <button mat-raised-button color="primary" (click)="onClick('edit')">
              <mat-icon>edit</mat-icon> Edit
            </button>
            <button mat-raised-button color="accent" (click)="onClick('save')">
              <mat-icon>save</mat-icon> Save
            </button>
            <button mat-raised-button color="warn" (click)="onClick('delete')">
              <mat-icon>delete</mat-icon> Delete
            </button>
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Icon Buttons</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row">
            <button mat-icon-button (click)="onClick('add-icon')" title="Add">
              <mat-icon>add</mat-icon>
            </button>
            <button mat-icon-button color="primary" (click)="onClick('edit-icon')" title="Edit">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="accent" (click)="onClick('save-icon')" title="Save">
              <mat-icon>save</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="onClick('delete-icon')" title="Delete">
              <mat-icon>delete</mat-icon>
            </button>
            <button mat-icon-button disabled (click)="onClick('disabled-icon')" title="Disabled">
              <mat-icon>block</mat-icon>
            </button>
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Button Colors</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row">
            <button mat-raised-button color="primary" (click)="onClick('primary')">Primary</button>
            <button mat-raised-button color="accent" (click)="onClick('accent')">Accent</button>
            <button mat-raised-button color="warn" (click)="onClick('warn')">Warn</button>
            <button mat-raised-button disabled (click)="onClick('disabled')">Disabled</button>
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Button Sizes</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row vertical">
            <button mat-button (click)="onClick('small')">Small Button</button>
            <button mat-raised-button (click)="onClick('medium')">Medium Button (Default)</button>
            <button mat-raised-button style="padding: 0 24px; height: 48px;" (click)="onClick('large')">Large Button</button>
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Button with Badges</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row">
            <button mat-raised-button color="primary" (click)="onClick('notifications')">
              Notifications
              <mat-badge color="warn" overlap="false">5</mat-badge>
            </button>
            <button mat-raised-button color="accent" (click)="onClick('messages')">
              Messages
              <mat-badge color="primary" overlap="false">12</mat-badge>
            </button>
            <button mat-icon-button color="primary" (click)="onClick('alerts')">
              <mat-icon>notifications</mat-icon>
              <mat-badge color="warn" overlap="true">3</mat-badge>
            </button>
          </div>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Button Group</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-row">
            <button mat-raised-button color="primary" (click)="onClick('first')">
              <mat-icon>skip_previous</mat-icon>
            </button>
            <button mat-raised-button color="primary" (click)="onClick('prev')">
              <mat-icon>chevron_left</mat-icon>
            </button>
            <button mat-raised-button color="primary" (click)="onClick('next')">
              <mat-icon>chevron_right</mat-icon>
            </button>
            <button mat-raised-button color="primary" (click)="onClick('last')">
              <mat-icon>skip_next</mat-icon>
            </button>
          </div>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Multiple button types (mat-button, raised, flat, stroked)</li>
          <li>Buttons with icons</li>
          <li>Icon-only buttons</li>
          <li>Various color themes (primary, accent, warn)</li>
          <li>Different button sizes</li>
          <li>Buttons with badges</li>
          <li>Button groups</li>
          <li>Disabled buttons</li>
          <li>Material Design styling</li>
          <li>Event handling</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .button-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .button-row.vertical {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .mt-20 {
      margin-top: 20px;
    }
  `]
})
export class ButtonComponent {
  lastClicked = '';
  
  onClick(button: string) {
    this.lastClicked = button;
  }
}
