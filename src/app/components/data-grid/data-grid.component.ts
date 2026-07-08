import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  hireDate: Date;
  salary: number;
  active: boolean;
}

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Data Grid</h2>
      
      <!-- Toolbar -->
      <div class="toolbar mb-20">
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>Search</mat-label>
          <input matInput (keyup)="applyFilter($event)" placeholder="Search...">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
        
        <div class="spacer"></div>
        
        <button mat-button [matMenuTriggerFor]="columnMenu">
          <mat-icon>view_column</mat-icon> Columns
        </button>
        <mat-menu #columnMenu="matMenu">
          <button mat-menu-item *ngFor="let column of displayedColumns" (click)="toggleColumn(column)">
            <mat-checkbox [checked]="isColumnVisible(column)" (click)="$event.stopPropagation()"></mat-checkbox>
            <span>{{ column }}</span>
          </button>
        </mat-menu>
        
        <button mat-button (click)="exportToCsv()">
          <mat-icon>file_download</mat-icon> Export
        </button>
        <button mat-button (click)="addRow()">
          <mat-icon>add</mat-icon> Add
        </button>
      </div>
      
      <!-- Data Table -->
      <div class="table-container">
        <table mat-table [dataSource]="dataSource" matSort [matSort]="sort" class="custom-data-grid">
          <!-- Checkbox Column -->
          <ng-container matColumnDef="select">
            <th mat-header-cell *matHeaderCellDef>
              <mat-checkbox
                [checked]="selection.hasValue() && isAllSelected()"
                [indeterminate]="selection.hasValue() && !isAllSelected()"
                (change)="toggleAllRows()"
              ></mat-checkbox>
            </th>
            <td mat-cell *matCellDef="let row">
              <mat-checkbox
                (click)="$event.stopPropagation()"
                (change)="$event ? selection.toggle(row) : null"
                [checked]="selection.isSelected(row)"
              ></mat-checkbox>
            </td>
          </ng-container>
          
          <!-- Dynamic Columns -->
          <ng-container *ngFor="let column of displayedColumns" [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>
              {{ column }}
            </th>
            <td mat-cell *matCellDef="let element">
              <span *ngIf="column !== 'active'">{{ element[column] }}</span>
              <mat-checkbox *ngIf="column === 'active'" [checked]="element[column]" disabled></mat-checkbox>
            </td>
          </ng-container>
          
          <!-- Action Column -->
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let element">
              <button mat-icon-button color="primary" (click)="editRow(element)">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" (click)="deleteRow(element)">
                <mat-icon>delete</mat-icon>
              </button>
            </td>
          </ng-container>
          
          <tr mat-header-row *matHeaderRowDef="getDisplayedColumns()"></tr>
          <tr mat-row *matRowDef="let row; columns: getDisplayedColumns()"></tr>
        </table>
      </div>
      
      <!-- Pagination -->
      <mat-paginator
        [pageSizeOptions]="[5, 10, 20, 50]"
        [pageSize]="10"
        showFirstLastButtons
        aria-label="Select page of employees"
      ></mat-paginator>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Sorting by clicking column headers</li>
          <li>Filtering with search box</li>
          <li>Pagination with page size options</li>
          <li>Row selection with checkboxes</li>
          <li>Column visibility toggle</li>
          <li>Export to CSV functionality</li>
          <li>Add, Edit, Delete row actions</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .toolbar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    
    .search-field {
      width: 250px;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    .custom-data-grid {
      width: 100%;
      border-collapse: collapse;
    }
    
    .mat-header-cell {
      background-color: #f5f5f5;
      font-weight: 500;
      color: #757575;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    
    .mat-cell {
      padding: 12px;
    }
    
    .mat-row {
      transition: background-color 0.2s;
    }
    
    .mat-row:hover {
      background-color: #f9f9f9;
    }
    
    .mat-row:nth-child(even) {
      background-color: #f9f9f9;
    }
    
    .mat-row:nth-child(even):hover {
      background-color: #f5f5f5;
    }
  `]
})
export class DataGridComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  allColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'position', 'department', 'hireDate', 'salary', 'active', 'actions'];
  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'position', 'department', 'hireDate', 'salary', 'active', 'actions'];
  visibleColumns: Set<string> = new Set(this.displayedColumns);
  
  dataSource!: MatTableDataSource<Employee>;
  selection = new SelectionModel<Employee>(true, []);
  
  employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Heart', position: 'CEO', department: 'Executive', hireDate: new Date(2010, 1, 1), salary: 150000, active: true },
    { id: 2, firstName: 'Sandra', lastName: 'Johnson', position: 'CTO', department: 'Executive', hireDate: new Date(2012, 3, 15), salary: 130000, active: true },
    { id: 3, firstName: 'Michael', lastName: 'Smith', position: 'Senior Developer', department: 'IT', hireDate: new Date(2015, 6, 1), salary: 95000, active: true },
    { id: 4, firstName: 'Sarah', lastName: 'Williams', position: 'Developer', department: 'IT', hireDate: new Date(2018, 1, 10), salary: 85000, active: true },
    { id: 5, firstName: 'Robert', lastName: 'Brown', position: 'Developer', department: 'IT', hireDate: new Date(2019, 5, 20), salary: 80000, active: true },
    { id: 6, firstName: 'Emily', lastName: 'Davis', position: 'QA Engineer', department: 'QA', hireDate: new Date(2017, 2, 28), salary: 75000, active: true },
    { id: 7, firstName: 'David', lastName: 'Wilson', position: 'QA Engineer', department: 'QA', hireDate: new Date(2020, 8, 15), salary: 70000, active: true },
    { id: 8, firstName: 'Jennifer', lastName: 'Taylor', position: 'HR Manager', department: 'HR', hireDate: new Date(2014, 11, 1), salary: 90000, active: true },
    { id: 9, firstName: 'James', lastName: 'Anderson', position: 'Marketing Specialist', department: 'Marketing', hireDate: new Date(2016, 4, 15), salary: 65000, active: false },
    { id: 10, firstName: 'Lisa', lastName: 'Thomas', position: 'Marketing Specialist', department: 'Marketing', hireDate: new Date(2021, 0, 10), salary: 60000, active: true },
    { id: 11, firstName: 'Daniel', lastName: 'Jackson', position: 'Sales Representative', department: 'Sales', hireDate: new Date(2013, 7, 1), salary: 72000, active: true },
    { id: 12, firstName: 'Olivia', lastName: 'White', position: 'Sales Representative', department: 'Sales', hireDate: new Date(2022, 3, 25), salary: 68000, active: true }
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.employees);
    this.visibleColumns = new Set(this.displayedColumns);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDisplayedColumns(): string[] {
    return this.displayedColumns.filter(col => this.visibleColumns.has(col));
  }

  isColumnVisible(column: string): boolean {
    return this.visibleColumns.has(column);
  }

  toggleColumn(column: string) {
    if (this.visibleColumns.has(column)) {
      this.visibleColumns.delete(column);
    } else {
      this.visibleColumns.add(column);
    }
    // Force update
    this.displayedColumns = [...this.displayedColumns];
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  addRow() {
    const newId = Math.max(...this.employees.map(e => e.id)) + 1;
    const newEmployee: Employee = {
      id: newId,
      firstName: 'New',
      lastName: 'Employee',
      position: 'Developer',
      department: 'IT',
      hireDate: new Date(),
      salary: 70000,
      active: true
    };
    this.employees = [...this.employees, newEmployee];
    this.dataSource.data = this.employees;
  }

  editRow(row: Employee) {
    alert(`Edit row: ${row.firstName} ${row.lastName}`);
  }

  deleteRow(row: Employee) {
    if (confirm(`Delete ${row.firstName} ${row.lastName}?`)) {
      this.employees = this.employees.filter(e => e.id !== row.id);
      this.dataSource.data = this.employees;
      this.selection.deselect(row);
    }
  }

  exportToCsv() {
    const csv = this.convertToCsv(this.employees);
    this.downloadCsv(csv, 'employees.csv');
  }

  private convertToCsv(data: Employee[]): string {
    const headers = ['ID', 'First Name', 'Last Name', 'Position', 'Department', 'Hire Date', 'Salary', 'Active'];
    const rows = data.map(e => [
      e.id,
      e.firstName,
      e.lastName,
      e.position,
      e.department,
      e.hireDate.toLocaleDateString(),
      e.salary,
      e.active
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(item => `"${String(item).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    
    return csvContent;
  }

  private downloadCsv(csv: string, filename: string) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Simple selection model for demonstration
class SelectionModel<T> {
  private selected: T[] = [];
  
  constructor(private allowMultiSelect: boolean, private initialSelection: T[] = []) {
    this.selected = [...initialSelection];
  }
  
  hasValue(): boolean {
    return this.selected.length > 0;
  }
  
  isSelected(item: T): boolean {
    return this.selected.includes(item);
  }
  
  select(...items: T[]): void {
    if (this.allowMultiSelect) {
      this.selected = [...this.selected, ...items];
    } else {
      this.selected = items;
    }
  }
  
  deselect(...items: T[]): void {
    this.selected = this.selected.filter(item => !items.includes(item));
  }
  
  toggle(item: T): void {
    if (this.isSelected(item)) {
      this.deselect(item);
    } else {
      this.select(item);
    }
  }
  
  clear(): void {
    this.selected = [];
  }
  
  get selected(): T[] {
    return [...this.selected];
  }
}
