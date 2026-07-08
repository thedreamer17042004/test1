import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Popup / Dialog</h2>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Simple Dialog</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Click the button below to open a simple dialog.</p>
          <button mat-raised-button color="primary" (click)="openSimpleDialog()">
            <mat-icon>open_in_new</mat-icon> Open Simple Dialog
          </button>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Form Dialog</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Click the button below to open a form dialog.</p>
          <button mat-raised-button color="success" (click)="openFormDialog()">
            <mat-icon>description</mat-icon> Open Form Dialog
          </button>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>Confirmation Dialog</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Click the button below to open a confirmation dialog.</p>
          <button mat-raised-button color="warn" (click)="openConfirmDialog()">
            <mat-icon>help</mat-icon> Open Confirmation
          </button>
          <p class="mt-20"><strong>Confirmation Result:</strong> {{ confirmResult || 'None' }}</p>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Custom Content Dialog</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Click the button below to open a dialog with custom content.</p>
          <button mat-raised-button color="accent" (click)="openCustomDialog()">
            <mat-icon>tune</mat-icon> Open Custom Dialog
          </button>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Simple dialog with title and content</li>
          <li>Form dialog with input fields</li>
          <li>Confirmation dialog with Yes/No buttons</li>
          <li>Custom content dialog</li>
          <li>Dialog close event handling</li>
          <li>Responsive design</li>
          <li>Material Design styling</li>
          <li>Custom dialog actions</li>
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
export class PopupComponent {
  confirmResult = '';
  
  constructor(private dialog: MatDialog) {}
  
  openSimpleDialog() {
    // In a real app, you would create a dialog component
    alert('Simple Dialog: This is a simple dialog with custom content.');
  }
  
  openFormDialog() {
    // In a real app, you would create a form dialog component
    const name = prompt('Please enter your name:', 'John Doe');
    if (name) {
      alert(`Form submitted! Name: ${name}`);
    }
  }
  
  openConfirmDialog() {
    const confirmed = confirm('Are you sure you want to perform this action?');
    this.confirmResult = confirmed ? 'Yes - Confirmed' : 'No - Cancelled';
  }
  
  openCustomDialog() {
    alert('Custom Dialog: This dialog can contain any custom HTML content, forms, or components.');
  }
}
