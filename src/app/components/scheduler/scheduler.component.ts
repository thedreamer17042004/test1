import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule, DxAppointmentModule } from 'devextreme-angular';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, DxSchedulerModule, DxAppointmentModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Scheduler / Calendar</h2>
      
      <dx-scheduler
        [dataSource]="appointments"
        [height]="600"
        [views]="['day', 'week', 'month', 'agenda']"
        [currentView]="'week'"
        [currentDate]="currentDate"
        [firstDayOfWeek]="1"
        [startDayHour]="8"
        [endDayHour]="19"
        [cellDuration]="60"
        [showAllDayPanel]="true"
        [allDayExpr]="'isAllDay'"
        [textExpr]="'text'"
        [startDateExpr]="'startDate'"
        [endDateExpr]="'endDate'"
        [recurrenceRuleExpr]="'recurrenceRule'"
        [appointmentTooltipTemplate]="appointmentTooltip"
      >
        <dxo-appointment [allowDragging]="true" [allowResizing]="true" [allowDeleting]="true" />
        <dxo-date-navigator [visible]="true" />
        <dxo-today-button [visible]="true" />
        <dxo-view-switcher [visible]="true" />
        <dxo-toolbar [visible]="true">
          <dxi-item name="add" />
          <dxi-item name="viewSwitcher" />
          <dxi-item name="dateNavigator" />
          <dxi-item name="today" />
        </dxo-toolbar>
        <dxo-export [enabled]="true" />
        
        <div *dxTemplate="let appointment of 'appointmentTooltip'">
          <div class="tooltip-content">
            <div class="tooltip-title">{{ appointment.text }}</div>
            <div class="tooltip-time">
              {{ formatDate(appointment.startDate) }} - {{ formatDate(appointment.endDate) }}
            </div>
            <div *ngIf="appointment.description" class="tooltip-description">
              {{ appointment.description }}
            </div>
          </div>
        </div>
      </dx-scheduler>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Multiple views (Day, Week, Month, Agenda)</li>
          <li>Appointment management (create, edit, delete)</li>
          <li>Drag and drop appointments</li>
          <li>Resize appointments</li>
          <li>Recurring appointments</li>
          <li>All-day appointments</li>
          <li>Custom tooltips</li>
          <li>Export functionality</li>
          <li>Date navigation</li>
          <li>Today button</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .tooltip-content {
      padding: 10px;
      font-size: 14px;
    }
    .tooltip-title {
      font-weight: bold;
      margin-bottom: 5px;
      color: #333;
    }
    .tooltip-time {
      color: #666;
      margin-bottom: 5px;
    }
    .tooltip-description {
      color: #888;
      font-size: 12px;
    }
  `]
})
export class SchedulerComponent {
  currentDate: Date = new Date();

  appointments = [
    {
      text: 'Meeting with Marketing Team',
      startDate: new Date(2024, 6, 8, 9, 0),
      endDate: new Date(2024, 6, 8, 10, 30),
      description: 'Discuss Q3 marketing strategy',
      isAllDay: false
    },
    {
      text: 'Lunch with Client',
      startDate: new Date(2024, 6, 8, 12, 0),
      endDate: new Date(2024, 6, 8, 13, 30),
      description: 'Client presentation and discussion',
      isAllDay: false
    },
    {
      text: 'Team Building Event',
      startDate: new Date(2024, 6, 9),
      endDate: new Date(2024, 6, 9),
      description: 'Annual team building activities',
      isAllDay: true
    },
    {
      text: 'Project Review',
      startDate: new Date(2024, 6, 10, 14, 0),
      endDate: new Date(2024, 6, 10, 15, 30),
      description: 'Review project progress and next steps',
      isAllDay: false
    },
    {
      text: 'Weekly Team Meeting',
      startDate: new Date(2024, 6, 11, 10, 0),
      endDate: new Date(2024, 6, 11, 11, 0),
      description: 'Regular team sync',
      recurrenceRule: 'FREQ=WEEKLY;BYDAY=TH',
      isAllDay: false
    },
    {
      text: 'Product Demo',
      startDate: new Date(2024, 6, 12, 15, 0),
      endDate: new Date(2024, 6, 12, 16, 0),
      description: 'Demo new product features to stakeholders',
      isAllDay: false
    },
    {
      text: 'Training Session',
      startDate: new Date(2024, 6, 15, 9, 0),
      endDate: new Date(2024, 6, 15, 12, 0),
      description: 'New employee training',
      isAllDay: false
    },
    {
      text: 'Conference Call',
      startDate: new Date(2024, 6, 16, 14, 0),
      endDate: new Date(2024, 6, 16, 15, 0),
      description: 'International team call',
      isAllDay: false
    }
  ];

  formatDate(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
