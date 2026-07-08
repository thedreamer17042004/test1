import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxDateBoxModule, DxNumberBoxModule, DxTextBoxModule, DxTextAreaModule, DxValidationGroupModule, DxValidatorModule, DxRequiredRuleModule, DxEmailRuleModule, DxNumericRuleModule, DxStringLengthRuleModule } from 'devextreme-angular';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    DxFormModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxRequiredRuleModule,
    DxEmailRuleModule,
    DxNumericRuleModule,
    DxStringLengthRuleModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Form Components</h2>
      
      <div class="dx-card">
        <dx-form
          [formData]="employee"
          [readOnly]="false"
          [showValidationSummary]="true"
          [validationGroup]="'employeeForm'"
          [labelLocation]="'top'"
          [colCount]="2"
        >
          <dxi-item dataField="FirstName" [isRequired]="true">
            <dxo-label text="First Name" />
            <dxo-validator>
              <dxo-required-rule message="First Name is required" />
            </dxo-validator>
          </dxi-item>
          
          <dxi-item dataField="LastName" [isRequired]="true">
            <dxo-label text="Last Name" />
            <dxo-validator>
              <dxo-required-rule message="Last Name is required" />
            </dxo-validator>
          </dxi-item>
          
          <dxi-item dataField="Email" [isRequired]="true">
            <dxo-label text="Email" />
            <dxo-validator>
              <dxo-required-rule message="Email is required" />
              <dxo-email-rule message="Email is invalid" />
            </dxo-validator>
          </dxi-item>
          
          <dxi-item dataField="Position" [isRequired]="true">
            <dxo-label text="Position" />
            <dxo-validator>
              <dxo-required-rule message="Position is required" />
            </dxo-validator>
          </dxi-item>
          
          <dxi-item dataField="Department">
            <dxo-label text="Department" />
            <dxo-select-box [dataSource]="departments" />
          </dxi-item>
          
          <dxi-item dataField="HireDate">
            <dxo-label text="Hire Date" />
            <dxo-date-box [displayFormat]="'d/M/yyyy'" />
          </dxi-item>
          
          <dxi-item dataField="Salary">
            <dxo-label text="Salary" />
            <dxo-number-box [format]="'currency'" [showSpinButtons]="true" />
          </dxi-item>
          
          <dxi-item dataField="Active" [colSpan]="2">
            <dxo-label text="Active Employee" />
            <dxo-check-box />
          </dxi-item>
          
          <dxi-item dataField="Notes" [colSpan]="2">
            <dxo-label text="Additional Notes" />
            <dxo-text-area [height]="100" />
          </dxi-item>
          
          <dxi-item [colSpan]="2" [itemType]="'group'" [caption]="'Address Information'">
            <dxi-item dataField="Address" [colSpan]="2">
              <dxo-label text="Street Address" />
              <dxo-text-box />
            </dxi-item>
            <dxi-item dataField="City">
              <dxo-label text="City" />
              <dxo-text-box />
            </dxi-item>
            <dxi-item dataField="State">
              <dxo-label text="State" />
              <dxo-text-box />
            </dxi-item>
            <dxi-item dataField="ZipCode">
              <dxo-label text="Zip Code" />
              <dxo-text-box>
                <dxo-validator>
                  <dxo-string-length-rule [min]="5" [max]="10" message="Zip code must be 5-10 characters" />
                </dxo-validator>
              </dxo-text-box>
            </dxi-item>
          </dxi-item>
        </dx-form>
        
        <div class="dx-form-group mt-20">
          <dx-button
            text="Submit"
            type="success"
            [useSubmitBehavior]="true"
            (onClick)="onSubmit()"
          />
          <dx-button
            text="Reset"
            type="normal"
            [useSubmitBehavior]="false"
            (onClick)="onReset()"
            class="ml-10"
          />
          <dx-button
            text="Clear"
            type="danger"
            [useSubmitBehavior]="false"
            (onClick)="onClear()"
            class="ml-10"
          />
        </div>
      </div>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Form layout with multiple columns</li>
          <li>Various input types (text, number, date, checkbox, select, textarea)</li>
          <li>Validation rules (required, email, string length)</li>
          <li>Validation summary display</li>
          <li>Grouped form items</li>
          <li>Form submission and reset</li>
          <li>Responsive layout</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .ml-10 {
      margin-left: 10px;
    }
    .dx-form-group {
      display: flex;
      gap: 10px;
    }
  `]
})
export class FormComponent {
  employee = {
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'john.doe@company.com',
    Position: 'Developer',
    Department: 'IT',
    HireDate: new Date(2020, 5, 15),
    Salary: 75000,
    Active: true,
    Notes: 'Experienced developer with 5+ years of experience',
    Address: '123 Main St',
    City: 'New York',
    State: 'NY',
    ZipCode: '10001'
  };

  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales', 'Executive'];

  onSubmit() {
    alert('Form submitted successfully!');
  }

  onReset() {
    alert('Form reset!');
  }

  onClear() {
    this.employee = {
      FirstName: '',
      LastName: '',
      Email: '',
      Position: '',
      Department: '',
      HireDate: new Date(),
      Salary: 0,
      Active: true,
      Notes: '',
      Address: '',
      City: '',
      State: '',
      ZipCode: ''
    };
  }
}
