import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Form Components</h2>
      
      <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()" class="custom-form">
        <!-- Basic Information Section -->
        <div class="form-section">
          <h3>Basic Information</h3>
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>First Name</mat-label>
              <input matInput formControlName="firstName" required>
              <mat-error *ngIf="employeeForm.get('firstName')?.hasError('required')">
                First Name is required
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Last Name</mat-label>
              <input matInput formControlName="lastName" required>
              <mat-error *ngIf="employeeForm.get('lastName')?.hasError('required')">
                Last Name is required
              </mat-error>
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" type="email" required>
              <mat-error *ngIf="employeeForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="employeeForm.get('email')?.hasError('email')">
                Please enter a valid email
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Phone</mat-label>
              <input matInput formControlName="phone">
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Position</mat-label>
              <input matInput formControlName="position" required>
              <mat-error *ngIf="employeeForm.get('position')?.hasError('required')">
                Position is required
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Department</mat-label>
              <mat-select formControlName="department" required>
                <mat-option *ngFor="let dept of departments" [value]="dept">
                  {{ dept }}
                </mat-option>
              </mat-select>
              <mat-error *ngIf="employeeForm.get('department')?.hasError('required')">
                Department is required
              </mat-error>
            </mat-form-field>
          </div>
        </div>
        
        <!-- Employment Information Section -->
        <div class="form-section">
          <h3>Employment Information</h3>
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Hire Date</mat-label>
              <input matInput [matDatepicker]="hireDatePicker" formControlName="hireDate" required>
              <mat-datepicker-toggle matSuffix [for]="hireDatePicker"></mat-datepicker-toggle>
              <mat-datepicker #hireDatePicker></mat-datepicker>
              <mat-error *ngIf="employeeForm.get('hireDate')?.hasError('required')">
                Hire Date is required
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Salary</mat-label>
              <input matInput formControlName="salary" type="number" min="0" required>
              <span matPrefix>$</span>
              <mat-error *ngIf="employeeForm.get('salary')?.hasError('required')">
                Salary is required
              </mat-error>
              <mat-error *ngIf="employeeForm.get('salary')?.hasError('min')">
                Salary must be at least 0
              </mat-error>
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Employment Type</mat-label>
              <mat-select formControlName="employmentType">
                <mat-option *ngFor="let type of employmentTypes" [value]="type">
                  {{ type }}
                </mat-option>
              </mat-select>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Experience (years)</mat-label>
              <input matInput formControlName="experience" type="number" min="0">
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field full-width">
              <mat-label>Manager</mat-label>
              <mat-select formControlName="manager">
                <mat-option *ngFor="let manager of managers" [value]="manager">
                  {{ manager }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
        
        <!-- Address Information Section -->
        <div class="form-section">
          <h3>Address Information</h3>
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field full-width">
              <mat-label>Street Address</mat-label>
              <input matInput formControlName="address">
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>City</mat-label>
              <input matInput formControlName="city">
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>State</mat-label>
              <input matInput formControlName="state">
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Zip Code</mat-label>
              <input matInput formControlName="zipCode">
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Country</mat-label>
              <mat-select formControlName="country">
                <mat-option *ngFor="let country of countries" [value]="country">
                  {{ country }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
        
        <!-- Preferences Section -->
        <div class="form-section">
          <h3>Preferences & Settings</h3>
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Language</mat-label>
              <mat-select formControlName="language">
                <mat-option *ngFor="let lang of languages" [value]="lang">
                  {{ lang }}
                </mat-option>
              </mat-select>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Time Zone</mat-label>
              <mat-select formControlName="timeZone">
                <mat-option *ngFor="let tz of timeZones" [value]="tz">
                  {{ tz }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
          
          <div class="form-row">
            <mat-slide-toggle formControlName="notifications" class="form-field">
              Enable Notifications
            </mat-slide-toggle>
            
            <mat-slide-toggle formControlName="newsletter" class="form-field">
              Subscribe to Newsletter
            </mat-slide-toggle>
          </div>
          
          <div class="form-row">
            <mat-form-field appearance="outline" class="form-field full-width">
              <mat-label>Bio</mat-label>
              <textarea matInput formControlName="bio" rows="4"></textarea>
            </mat-form-field>
          </div>
        </div>
        
        <!-- Form Actions -->
        <div class="form-actions">
          <button mat-raised-button color="primary" type="submit" [disabled]="!employeeForm.valid">
            <mat-icon>save</mat-icon> Save
          </button>
          <button mat-button color="warn" type="button" (click)="onReset()">
            <mat-icon>refresh</mat-icon> Reset
          </button>
          <button mat-button color="" type="button" (click)="onCancel()">
            <mat-icon>close</mat-icon> Cancel
          </button>
        </div>
      </form>
      
      <!-- Form Status -->
      <div class="form-status mt-20">
        <h3>Form Status</h3>
        <p><strong>Valid:</strong> {{ employeeForm.valid ? 'Yes' : 'No' }}</p>
        <p><strong>Dirty:</strong> {{ employeeForm.dirty ? 'Yes' : 'No' }}</p>
        <p><strong>Touched:</strong> {{ employeeForm.touched ? 'Yes' : 'No' }}</p>
      </div>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Form validation with error messages</li>
          <li>Multiple form sections</li>
          <li>Various input types (text, email, number, date, select, textarea)</li>
          <li>Material Design form fields with outline appearance</li>
          <li>Slide toggles for boolean values</li>
          <li>Form submission and reset</li>
          <li>Responsive layout with grid system</li>
          <li>Custom form controls</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .custom-form {
      max-width: 1000px;
    }
    
    .form-section {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    
    .form-section h3 {
      margin-top: 0;
      color: #1976d2;
      font-size: 1.1rem;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .form-row {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
    
    .form-field {
      flex: 1;
      min-width: 200px;
    }
    
    .form-field.full-width {
      flex: 0 0 100%;
    }
    
    .form-actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }
    
    .form-status {
      background: #fff3cd;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #ffc107;
    }
    
    mat-form-field {
      width: 100%;
    }
    
    mat-slide-toggle {
      margin-top: 10px;
    }
  `]
})
export class FormComponent {
  employeeForm: FormGroup;
  
  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales', 'Executive', 'QA', 'Support'];
  employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Intern', 'Freelance'];
  managers = ['John Heart', 'Sandra Johnson', 'Michael Smith', 'Sarah Williams', 'Robert Brown'];
  countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia'];
  languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Vietnamese'];
  timeZones = ['UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00 (PST)', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00 (EST)', 'UTC-04:00', 'UTC+00:00 (GMT)', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:30', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00'];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      // Basic Information
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      position: ['', Validators.required],
      department: ['', Validators.required],
      
      // Employment Information
      hireDate: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      employmentType: ['Full-time'],
      experience: [''],
      manager: [''],
      
      // Address Information
      address: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      country: ['United States'],
      
      // Preferences
      language: ['English'],
      timeZone: ['UTC+00:00 (GMT)'],
      notifications: [true],
      newsletter: [false],
      bio: ['']
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      alert('Form submitted successfully!\n\n' + JSON.stringify(this.employeeForm.value, null, 2));
    }
  }

  onReset() {
    this.employeeForm.reset();
  }

  onCancel() {
    if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
      this.employeeForm.reset();
    }
  }
}
