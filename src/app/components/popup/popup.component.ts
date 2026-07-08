import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPopupModule, DxButtonModule, DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, DxPopupModule, DxButtonModule, DxTextBoxModule, DxTextAreaModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Popup Components</h2>
      
      <!-- Simple Popup -->
      <div class="component-card mb-20">
        <h3>Simple Popup</h3>
        <dx-button
          text="Open Simple Popup"
          type="default"
          (onClick)="simplePopupVisible = true"
        />
        
        <dx-popup
          [(visible)]="simplePopupVisible"
          [title]="'Simple Popup'"
          [height]="250"
          [width]="400"
          [showTitle]="true"
          [dragEnabled]="true"
          [closeOnOutsideClick]="true"
          [showCloseButton]="true"
        >
          <div class="popup-content">
            <p>This is a simple popup window.</p>
            <p>You can put any content here.</p>
            <dx-button
              text="Close"
              type="normal"
              (onClick)="simplePopupVisible = false"
            />
          </div>
        </dx-popup>
      </div>
      
      <!-- Form Popup -->
      <div class="component-card mb-20">
        <h3>Form Popup</h3>
        <dx-button
          text="Open Form Popup"
          type="success"
          (onClick)="formPopupVisible = true"
        />
        
        <dx-popup
          [(visible)]="formPopupVisible"
          [title]="'Contact Form'"
          [height]="400"
          [width]="500"
          [showTitle]="true"
          [dragEnabled]="true"
          [closeOnOutsideClick]="false"
          [showCloseButton]="true"
        >
          <div class="popup-content">
            <div class="form-group">
              <label>Name:</label>
              <dx-text-box [(value)]="contactForm.name" [placeholder]="'Enter your name'" />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <dx-text-box [(value)]="contactForm.email" [placeholder]="'Enter your email'" />
            </div>
            <div class="form-group">
              <label>Message:</label>
              <dx-text-area [(value)]="contactForm.message" [height]="100" [placeholder]="'Enter your message'" />
            </div>
            <div class="popup-actions">
              <dx-button
                text="Submit"
                type="success"
                (onClick)="onFormSubmit()"
              />
              <dx-button
                text="Cancel"
                type="normal"
                (onClick)="formPopupVisible = false"
              />
            </div>
          </div>
        </dx-popup>
      </div>
      
      <!-- Confirmation Popup -->
      <div class="component-card mb-20">
        <h3>Confirmation Popup</h3>
        <dx-button
          text="Delete Item"
          type="danger"
          (onClick)="confirmationPopupVisible = true"
        />
        
        <dx-popup
          [(visible)]="confirmationPopupVisible"
          [title]="'Confirm Deletion'"
          [height]="200"
          [width]="400"
          [showTitle]="true"
          [dragEnabled]="true"
          [closeOnOutsideClick]="true"
          [showCloseButton]="true"
        >
          <div class="popup-content">
            <p>Are you sure you want to delete this item?</p>
            <p>This action cannot be undone.</p>
            <div class="popup-actions">
              <dx-button
                text="Delete"
                type="danger"
                (onClick)="onConfirmDelete()"
              />
              <dx-button
                text="Cancel"
                type="normal"
                (onClick)="confirmationPopupVisible = false"
              />
            </div>
          </div>
        </dx-popup>
      </div>
      
      <!-- Full Screen Popup -->
      <div class="component-card mb-20">
        <h3>Full Screen Popup</h3>
        <dx-button
          text="Open Full Screen"
          type="default"
          (onClick)="fullScreenPopupVisible = true"
        />
        
        <dx-popup
          [(visible)]="fullScreenPopupVisible"
          [title]="'Full Screen Popup'"
          [height]="90vh"
          [width]="90vw"
          [maxHeight]="90vh"
          [maxWidth]="90vw"
          [showTitle]="true"
          [dragEnabled]="true"
          [closeOnOutsideClick]="true"
          [showCloseButton]="true"
        >
          <div class="popup-content full-screen-content">
            <h3>Full Screen Content</h3>
            <p>This popup takes most of the screen space.</p>
            <p>Useful for displaying large amounts of information or complex forms.</p>
            <dx-button
              text="Close"
              type="normal"
              (onClick)="fullScreenPopupVisible = false"
            />
          </div>
        </dx-popup>
      </div>
      
      <!-- Positioned Popup -->
      <div class="component-card">
        <h3>Positioned Popup</h3>
        <div style="position: relative; height: 200px; border: 1px solid #ddd; padding: 20px;">
          <dx-button
            text="Open at Position"
            type="default"
            (onClick)="positionedPopupVisible = true"
            id="positionButton"
          />
          
          <dx-popup
            [(visible)]="positionedPopupVisible"
            [title]="'Positioned Popup'"
            [height]="200"
            [width]="300"
            [showTitle]="true"
            [dragEnabled]="true"
            [closeOnOutsideClick]="true"
            [showCloseButton]="true"
            [position]="{ of: '#positionButton', at: 'bottom', my: 'top', offset: { x: 0, y: 10 } }"
          >
            <div class="popup-content">
              <p>This popup is positioned relative to the button.</p>
              <dx-button
                text="Close"
                type="normal"
                (onClick)="positionedPopupVisible = false"
              />
            </div>
          </dx-popup>
        </div>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Simple popup with basic content</li>
          <li>Form popup with input fields</li>
          <li>Confirmation popup for actions</li>
          <li>Full screen popup for large content</li>
          <li>Positioned popup relative to elements</li>
          <li>Drag and drop functionality</li>
          <li>Close on outside click</li>
          <li>Custom buttons and actions</li>
          <li>Animation effects</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .popup-content {
      padding: 20px;
      height: 100%;
      overflow-y: auto;
    }
    
    .full-screen-content {
      max-height: 80vh;
      overflow-y: auto;
    }
    
    .popup-actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      justify-content: flex-end;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
  `]
})
export class PopupComponent {
  simplePopupVisible = false;
  formPopupVisible = false;
  confirmationPopupVisible = false;
  fullScreenPopupVisible = false;
  positionedPopupVisible = false;

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onFormSubmit() {
    alert(`Form submitted!\nName: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\nMessage: ${this.contactForm.message}`);
    this.formPopupVisible = false;
    this.contactForm = { name: '', email: '', message: '' };
  }

  onConfirmDelete() {
    alert('Item deleted successfully!');
    this.confirmationPopupVisible = false;
  }
}
