import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Toolbar</h2>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Basic Toolbar</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-toolbar color="primary">
            <button mat-icon-button (click)="onAction('new')">
              <mat-icon>add</mat-icon>
            </button>
            <button mat-icon-button (click)="onAction('save')">
              <mat-icon>save</mat-icon>
            </button>
            <button mat-icon-button (click)="onAction('delete')">
              <mat-icon>delete</mat-icon>
            </button>
            <button mat-icon-button (click)="onAction('refresh')">
              <mat-icon>refresh</mat-icon>
            </button>
            <span class="spacer"></span>
            <button mat-icon-button (click)="onAction('settings')">
              <mat-icon>settings</mat-icon>
            </button>
          </mat-toolbar>
          <p class="mt-20"><strong>Last Action:</strong> {{ lastAction || 'None' }}</p>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Toolbar with Text Buttons</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-toolbar color="accent">
            <button mat-button (click)="onAction('new')">New</button>
            <button mat-button (click)="onAction('open')">Open</button>
            <button mat-button (click)="onAction('save')">Save</button>
            <button mat-button (click)="onAction('print')">Print</button>
            <span class="spacer"></span>
            <button mat-button (click)="onAction('help')">Help</button>
          </mat-toolbar>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Toolbar with Form Elements</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-toolbar color="warn">
            <mat-form-field appearance="outline" class="toolbar-form-field">
              <mat-label>Search</mat-label>
              <input matInput placeholder="Search...">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            <span class="spacer"></span>
            <mat-form-field appearance="outline" class="toolbar-form-field">
              <mat-label>Category</mat-label>
              <mat-select>
                <mat-option value="all">All</mat-option>
                <mat-option value="products">Products</mat-option>
                <mat-option value="orders">Orders</mat-option>
              </mat-select>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="onAction('search')">
              <mat-icon>search</mat-icon> Search
            </button>
          </mat-toolbar>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Multi-row Toolbar</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-toolbar color="primary">
            <button mat-button (click)="onAction('bold')">
              <mat-icon>format_bold</mat-icon>
            </button>
            <button mat-button (click)="onAction('italic')">
              <mat-icon>format_italic</mat-icon>
            </button>
            <button mat-button (click)="onAction('underline')">
              <mat-icon>format_underlined</mat-icon>
            </button>
            <span class="spacer"></span>
            <button mat-button (click)="onAction('align_left')">
              <mat-icon>format_align_left</mat-icon>
            </button>
            <button mat-button (click)="onAction('align_center')">
              <mat-icon>format_align_center</mat-icon>
            </button>
            <button mat-button (click)="onAction('align_right')">
              <mat-icon>format_align_right</mat-icon>
            </button>
          </mat-toolbar>
          <mat-toolbar color="accent" class="mt-10">
            <button mat-button (click)="onAction('undo')">
              <mat-icon>undo</mat-icon> Undo
            </button>
            <button mat-button (click)="onAction('redo')">
              <mat-icon>redo</mat-icon> Redo
            </button>
            <span class="spacer"></span>
            <button mat-button (click)="onAction('cut')">
              <mat-icon>content_cut</mat-icon> Cut
            </button>
            <button mat-button (click)="onAction('copy')">
              <mat-icon>content_copy</mat-icon> Copy
            </button>
            <button mat-button (click)="onAction('paste')">
              <mat-icon>content_paste</mat-icon> Paste
            </button>
          </mat-toolbar>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Basic toolbar with icon buttons</li>
          <li>Toolbar with text buttons</li>
          <li>Toolbar with form elements (search, select)</li>
          <li>Multi-row toolbar</li>
          <li>Custom toolbar colors</li>
          <li>Spacer for flexible layout</li>
          <li>Event handling for toolbar items</li>
          <li>Material Design styling</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    
    .toolbar-form-field {
      width: 200px;
      margin-right: 10px;
    }
    
    .mt-10 {
      margin-top: 10px;
    }
    
    .mt-20 {
      margin-top: 20px;
    }
  `]
})
export class ToolbarComponent {
  lastAction = '';
  
  onAction(action: string) {
    this.lastAction = action;
  }
}
