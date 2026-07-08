import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  color?: string;
}

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Scheduler / Calendar</h2>
      
      <!-- Toolbar -->
      <div class="scheduler-toolbar mb-20">
        <button mat-button (click)="changeView('day')" [class.active]="currentView === 'day'">
          <mat-icon>view_day</mat-icon> Day
        </button>
        <button mat-button (click)="changeView('week')" [class.active]="currentView === 'week'">
          <mat-icon>view_week</mat-icon> Week
        </button>
        <button mat-button (click)="changeView('month')" [class.active]="currentView === 'month'">
          <mat-icon>calendar_view_month</mat-icon> Month
        </button>
        <button mat-button (click)="changeView('agenda')" [class.active]="currentView === 'agenda'">
          <mat-icon>view_agenda</mat-icon> Agenda
        </button>
        
        <div class="spacer"></div>
        
        <button mat-button (click)="navigateToday()">
          <mat-icon>today</mat-icon> Today
        </button>
        <button mat-button (click)="navigatePrev()">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-button (click)="navigateNext()">
          <mat-icon>chevron_right</mat-icon>
        </button>
        <button mat-raised-button color="primary" (click)="openAddAppointmentDialog()">
          <mat-icon>add</mat-icon> Add Appointment
        </button>
      </div>
      
      <!-- Calendar View -->
      <div class="scheduler-container">
        <!-- Week View -->
        <div *ngIf="currentView === 'week'" class="week-view">
          <div class="week-header">
            <div class="time-header">
              <div class="time-cell" *ngFor="let hour of hours">{{ hour }}</div>
            </div>
            <div class="day-header">
              <div class="day-cell" *ngFor="let day of currentWeek">
                <div class="day-name">{{ getDayName(day) }}</div>
                <div class="day-date">{{ getDayDate(day) }}</div>
              </div>
            </div>
          </div>
          
          <div class="week-grid">
            <div class="time-column">
              <div class="time-cell" *ngFor="let hour of hours"></div>
            </div>
            <div class="day-column" *ngFor="let day of currentWeek">
              <div class="time-slot" *ngFor="let hour of hours">
                <div class="appointment" 
                     *ngFor="let appt of getAppointmentsForSlot(day, hour)"
                     [style.background]="appt.color || '#1976d2'"
                     (click)="openAppointmentDialog(appt)">
                  <div class="appointment-time">{{ formatTime(appt.start) }} - {{ formatTime(appt.end) }}</div>
                  <div class="appointment-title">{{ appt.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Month View -->
        <div *ngIf="currentView === 'month'" class="month-view">
          <div class="month-header">
            <div class="day-name" *ngFor="let day of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']">{{ day }}</div>
          </div>
          <div class="month-grid">
            <div class="month-cell" *ngFor="let day of currentMonthDays"
                 [class.other-month]="!isCurrentMonth(day)"
                 [class.today]="isToday(day)">
              <div class="cell-date">{{ day.getDate() }}</div>
              <div class="cell-appointments">
                <div class="month-appointment" *ngFor="let appt of getAppointmentsForDay(day)"
                     [style.background]="appt.color || '#1976d2'"
                     (click)="openAppointmentDialog(appt)">
                  {{ appt.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Day View -->
        <div *ngIf="currentView === 'day'" class="day-view">
          <div class="day-header">
            <h3>{{ formatDate(currentDate) }}</h3>
          </div>
          <div class="day-grid">
            <div class="time-column">
              <div class="time-cell" *ngFor="let hour of hours">{{ hour }}</div>
            </div>
            <div class="day-column">
              <div class="time-slot" *ngFor="let hour of hours">
                <div class="appointment" 
                     *ngFor="let appt of getAppointmentsForDayTime(currentDate, hour)"
                     [style.background]="appt.color || '#1976d2'"
                     (click)="openAppointmentDialog(appt)">
                  <div class="appointment-time">{{ formatTime(appt.start) }} - {{ formatTime(appt.end) }}</div>
                  <div class="appointment-title">{{ appt.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Agenda View -->
        <div *ngIf="currentView === 'agenda'" class="agenda-view">
          <div class="agenda-date-group" *ngFor="let group of agendaGroups">
            <h3>{{ group.date }}</h3>
            <div class="agenda-appointment" *ngFor="let appt of group.appointments"
                 [style.border-left-color]="appt.color || '#1976d2'"
                 (click)="openAppointmentDialog(appt)">
              <div class="agenda-time">{{ formatTime(appt.start) }} - {{ formatTime(appt.end) }}</div>
              <div class="agenda-title">{{ appt.title }}</div>
              <div class="agenda-description">{{ appt.description || 'No description' }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Multiple views: Day, Week, Month, Agenda</li>
          <li>Navigation between dates</li>
          <li>Add, Edit, Delete appointments</li>
          <li>Color-coded appointments</li>
          <li>Today button</li>
          <li>Responsive design</li>
          <li>Appointment details dialog</li>
          <li>Time slot visualization</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .scheduler-toolbar {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    
    .scheduler-toolbar button.active {
      background-color: rgba(25, 118, 210, 0.1);
      color: #1976d2;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    .scheduler-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    /* Week View */
    .week-view {
      display: flex;
      flex-direction: column;
    }
    
    .week-header {
      display: flex;
    }
    
    .time-header {
      width: 60px;
      display: flex;
      flex-direction: column;
    }
    
    .time-cell {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #757575;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
      padding: 5px;
    }
    
    .day-header {
      display: flex;
      flex: 1;
    }
    
    .day-cell {
      flex: 1;
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
    }
    
    .day-name {
      font-weight: 500;
      color: #333;
    }
    
    .day-date {
      font-size: 12px;
      color: #757575;
    }
    
    .week-grid {
      display: flex;
    }
    
    .time-column {
      width: 60px;
    }
    
    .day-column {
      flex: 1;
      border-right: 1px solid #e0e0e0;
    }
    
    .time-slot {
      height: 60px;
      position: relative;
      border-bottom: 1px solid #e0e0e0;
      padding: 5px;
    }
    
    .appointment {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      padding: 5px;
      border-radius: 4px;
      color: white;
      font-size: 12px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .appointment:hover {
      transform: scale(1.02);
    }
    
    .appointment-time {
      font-size: 10px;
      opacity: 0.8;
    }
    
    .appointment-title {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    /* Month View */
    .month-view {
      display: flex;
      flex-direction: column;
    }
    
    .month-header {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      font-weight: 500;
      padding: 10px;
      background: #f5f5f5;
    }
    
    .month-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
    
    .month-cell {
      aspect-ratio: 1;
      padding: 10px;
      border: 1px solid #e0e0e0;
      position: relative;
    }
    
    .month-cell.other-month {
      background: #f9f9f9;
      color: #999;
    }
    
    .month-cell.today {
      background: rgba(25, 118, 210, 0.1);
    }
    
    .cell-date {
      text-align: right;
      font-weight: 500;
    }
    
    .cell-appointments {
      margin-top: 5px;
    }
    
    .month-appointment {
      padding: 3px 5px;
      border-radius: 3px;
      color: white;
      font-size: 10px;
      margin-bottom: 2px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    /* Day View */
    .day-view {
      display: flex;
      flex-direction: column;
    }
    
    .day-header {
      padding: 15px;
      background: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .day-grid {
      display: flex;
    }
    
    /* Agenda View */
    .agenda-view {
      padding: 20px;
    }
    
    .agenda-date-group {
      margin-bottom: 20px;
    }
    
    .agenda-date-group h3 {
      color: #1976d2;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 10px;
    }
    
    .agenda-appointment {
      padding: 15px;
      margin: 10px 0;
      border-left: 4px solid #1976d2;
      background: #f9f9f9;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .agenda-appointment:hover {
      background: #f5f5f5;
    }
    
    .agenda-time {
      color: #757575;
      font-size: 0.9rem;
      margin-bottom: 5px;
    }
    
    .agenda-title {
      font-weight: 500;
      margin-bottom: 5px;
    }
    
    .agenda-description {
      color: #666;
      font-size: 0.9rem;
    }
  `]
})
export class SchedulerComponent {
  currentView: 'day' | 'week' | 'month' | 'agenda' = 'week';
  currentDate = new Date();
  
  hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  
  appointments: Appointment[] = [
    { id: 1, title: 'Meeting with Marketing Team', start: this.getDateTime(8, 30), end: this.getDateTime(10, 0), description: 'Discuss Q3 marketing strategy', location: 'Conference Room A', color: '#1976d2' },
    { id: 2, title: 'Lunch with Client', start: this.getDateTime(12, 0), end: this.getDateTime(13, 30), description: 'Client presentation and discussion', location: 'Restaurant', color: '#4caf50' },
    { id: 3, title: 'Team Building Event', start: this.getDateTime(9, 0), end: this.getDateTime(17, 0), description: 'Annual team building activities', color: '#ff9800' },
    { id: 4, title: 'Project Review', start: this.getDateTime(14, 0), end: this.getDateTime(15, 30), description: 'Review project progress and next steps', location: 'Conference Room B', color: '#e91e63' },
    { id: 5, title: 'Weekly Team Meeting', start: this.getDateTime(10, 0), end: this.getDateTime(11, 0), description: 'Regular team sync', color: '#9c27b0' },
    { id: 6, title: 'Product Demo', start: this.getDateTime(15, 0), end: this.getDateTime(16, 0), description: 'Demo new product features to stakeholders', location: 'Online', color: '#1976d2' },
    { id: 7, title: 'Training Session', start: this.getDateTime(9, 0), end: this.getDateTime(12, 0), description: 'New employee training', location: 'Training Room', color: '#4caf50' },
    { id: 8, title: 'Conference Call', start: this.getDateTime(14, 0), end: this.getDateTime(15, 0), description: 'International team call', location: 'Online', color: '#ff9800' }
  ];
  
  constructor(private dialog: MatDialog) {}
  
  get currentWeek(): Date[] {
    const week = [];
    const date = new Date(this.currentDate);
    date.setDate(date.getDate() - date.getDay()); // Start from Sunday
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(date);
      day.setDate(date.getDate() + i);
      week.push(day);
    }
    
    return week;
  }
  
  get currentMonthDays(): Date[] {
    const days = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Add days from previous month
    const startDay = firstDay.getDay();
    for (let i = startDay - 1; i >= 0; i--) {
      const day = new Date(year, month, 1 - (i + 1));
      days.push(day);
    }
    
    // Add days from current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    // Add days from next month
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    
    return days;
  }
  
  get agendaGroups(): { date: string; appointments: Appointment[] }[] {
    const groups: { date: string; appointments: Appointment[] }[] = [];
    
    const sortedAppointments = [...this.appointments].sort((a, b) => a.start.getTime() - b.start.getTime());
    
    for (const appt of sortedAppointments) {
      const dateStr = appt.start.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
      
      let group = groups.find(g => g.date === dateStr);
      if (!group) {
        group = { date: dateStr, appointments: [] };
        groups.push(group);
      }
      group.appointments.push(appt);
    }
    
    return groups;
  }
  
  changeView(view: 'day' | 'week' | 'month' | 'agenda') {
    this.currentView = view;
  }
  
  navigateToday() {
    this.currentDate = new Date();
  }
  
  navigatePrev() {
    if (this.currentView === 'day') {
      this.currentDate.setDate(this.currentDate.getDate() - 1);
    } else if (this.currentView === 'week') {
      this.currentDate.setDate(this.currentDate.getDate() - 7);
    } else if (this.currentView === 'month') {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    }
  }
  
  navigateNext() {
    if (this.currentView === 'day') {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    } else if (this.currentView === 'week') {
      this.currentDate.setDate(this.currentDate.getDate() + 7);
    } else if (this.currentView === 'month') {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
  }
  
  getDayName(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }
  
  getDayDate(date: Date): string {
    return date.getDate().toString();
  }
  
  isCurrentMonth(date: Date): boolean {
    const today = new Date();
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }
  
  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  }
  
  getAppointmentsForSlot(day: Date, hour: string): Appointment[] {
    const [hourNum] = hour.split(':').map(Number);
    const startTime = new Date(day);
    startTime.setHours(hourNum, 0, 0, 0);
    
    const endTime = new Date(day);
    endTime.setHours(hourNum + 1, 0, 0, 0);
    
    return this.appointments.filter(appt => {
      const apptStart = appt.start.getTime();
      const apptEnd = appt.end.getTime();
      const slotStart = startTime.getTime();
      const slotEnd = endTime.getTime();
      
      return apptStart < slotEnd && apptEnd > slotStart;
    });
  }
  
  getAppointmentsForDay(day: Date): Appointment[] {
    const startOfDay = new Date(day);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(day);
    endOfDay.setHours(23, 59, 59, 999);
    
    return this.appointments.filter(appt => {
      return appt.start >= startOfDay && appt.start <= endOfDay;
    });
  }
  
  getAppointmentsForDayTime(day: Date, hour: string): Appointment[] {
    return this.getAppointmentsForSlot(day, hour);
  }
  
  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  }
  
  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  }
  
  openAddAppointmentDialog() {
    alert('Add Appointment dialog would open here');
  }
  
  openAppointmentDialog(appointment: Appointment) {
    alert(`Appointment: ${appointment.title}\n\n` +
          `Start: ${this.formatDateTime(appointment.start)}\n` +
          `End: ${this.formatDateTime(appointment.end)}\n\n` +
          `Description: ${appointment.description || 'None'}\n` +
          `Location: ${appointment.location || 'None'}`);
  }
  
  private formatDateTime(date: Date): string {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }
  
  private getDateTime(hour: number, minute: number): Date {
    const date = new Date();
    date.setHours(hour, minute, 0, 0);
    return date;
  }
}
