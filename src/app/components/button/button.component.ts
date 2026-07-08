import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxCheckBoxModule, DxRadioGroupModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, DxButtonModule, DxCheckBoxModule, DxRadioGroupModule, DxSelectBoxModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Button Components</h2>
      
      <!-- Button Types -->
      <div class="component-card mb-20">
        <h3>Button Types</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <dx-button text="Default" type="default" (onClick)="onClick('Default')" />
          <dx-button text="Success" type="success" (onClick)="onClick('Success')" />
          <dx-button text="Normal" type="normal" (onClick)="onClick('Normal')" />
          <dx-button text="Danger" type="danger" (onClick)="onClick('Danger')" />
        </div>
        <p class="mt-20"><strong>Last Clicked:</strong> {{ lastClicked || 'None' }}</p>
      </div>
      
      <!-- Button with Icons -->
      <div class="component-card mb-20">
        <h3>Button with Icons</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
          <dx-button [icon]="'add'" text="Add" type="success" />
          <dx-button [icon]="'edit'" text="Edit" type="normal" />
          <dx-button [icon]="'save'" text="Save" type="success" />
          <dx-button [icon]="'trash'" text="Delete" type="danger" />
          <dx-button [icon]="'refresh'" text="Refresh" type="normal" />
          <dx-button [icon]="'search'" text="Search" type="default" />
          <dx-button [icon]="'export'" text="Export" type="normal" />
          <dx-button [icon]="'import'" text="Import" type="normal" />
        </div>
      </div>
      
      <!-- Icon Only Buttons -->
      <div class="component-card mb-20">
        <h3>Icon Only Buttons</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <dx-button [icon]="'add'" type="success" />
          <dx-button [icon]="'edit'" type="normal" />
          <dx-button [icon]="'save'" type="success" />
          <dx-button [icon]="'trash'" type="danger" />
          <dx-button [icon]="'refresh'" type="normal" />
          <dx-button [icon]="'search'" type="default" />
          <dx-button [icon]="'menu'" type="normal" />
          <dx-button [icon]="'close'" type="danger" />
        </div>
      </div>
      
      <!-- Button Sizes -->
      <div class="component-card mb-20">
        <h3>Button Sizes</h3>
        <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
          <div>
            <p style="margin-bottom: 5px;">Small:</p>
            <dx-button text="Small" type="default" [width]="100" [height]="36" />
          </div>
          <div>
            <p style="margin-bottom: 5px;">Normal:</p>
            <dx-button text="Normal" type="default" [width]="120" [height]="40" />
          </div>
          <div>
            <p style="margin-bottom: 5px;">Large:</p>
            <dx-button text="Large" type="default" [width]="140" [height]="48" />
          </div>
        </div>
      </div>
      
      <!-- Button States -->
      <div class="component-card mb-20">
        <h3>Button States</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
          <dx-button text="Normal" type="default" />
          <dx-button text="Disabled" type="default" [disabled]="true" />
          <dx-button text="Loading" type="default" [useSubmitBehavior]="true" />
        </div>
      </div>
      
      <!-- Button with Submit Behavior -->
      <div class="component-card mb-20">
        <h3>Button with Submit Behavior</h3>
        <form (ngSubmit)="onFormSubmit()">
          <div style="display: flex; gap: 10px; align-items: center;">
            <dx-text-box [(value)]="inputValue" [placeholder]="'Type something...'" />
            <dx-button text="Submit" type="success" [useSubmitBehavior]="true" />
            <dx-button text="Reset" type="normal" (onClick)="inputValue = ''" />
          </div>
        </form>
        <p class="mt-20"><strong>Form Value:</strong> {{ inputValue || 'Empty' }}</p>
      </div>
      
      <!-- Button Group -->
      <div class="component-card mb-20">
        <h3>Button Group</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <dx-button text="Left" type="normal" [icon]="'chevronleft'" />
          <dx-button text="Center" type="normal" [icon]="'chevronup'" />
          <dx-button text="Right" type="normal" [icon]="'chevronright'" />
        </div>
      </div>
      
      <!-- Button with Custom Styling -->
      <div class="component-card mb-20">
        <h3>Button with Custom Styling</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <dx-button text="Primary" type="default" [cssClass]="'custom-primary'" />
          <dx-button text="Secondary" type="normal" [cssClass]="'custom-secondary'" />
          <dx-button text="Warning" type="danger" [cssClass]="'custom-warning'" />
        </div>
      </div>
      
      <!-- Button with Badge -->
      <div class="component-card">
        <h3>Button with Badge</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <div style="position: relative;">
            <dx-button text="Notifications" type="normal" [icon]="'bell'" />
            <span class="badge">5</span>
          </div>
          <div style="position: relative;">
            <dx-button text="Messages" type="normal" [icon]="'message'" />
            <span class="badge">12</span>
          </div>
          <div style="position: relative;">
            <dx-button text="Tasks" type="normal" [icon]="'task'" />
            <span class="badge">3</span>
          </div>
        </div>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Different button types (default, success, normal, danger)</li>
          <li>Buttons with icons</li>
          <li>Icon-only buttons</li>
          <li>Various button sizes</li>
          <li>Button states (normal, disabled, loading)</li>
          <li>Submit behavior for forms</li>
          <li>Button groups</li>
          <li>Custom styling with CSS classes</li>
          <li>Buttons with badges</li>
          <li>Event handling</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ff4081;
      color: white;
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 12px;
    }
    
    .custom-primary {
      background: linear-gradient(45deg, #1976d2, #2196f3);
      color: white;
    }
    
    .custom-secondary {
      background: linear-gradient(45deg, #9c27b0, #e91e63);
      color: white;
    }
    
    .custom-warning {
      background: linear-gradient(45deg, #ff9800, #ffc107);
      color: white;
    }
  `]
})
export class ButtonComponent {
  lastClicked = '';
  inputValue = '';

  onClick(type: string) {
    this.lastClicked = type;
  }

  onFormSubmit() {
    alert(`Form submitted with value: ${this.inputValue}`);
  }
}
