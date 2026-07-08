import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
  template: `
    <div class="component-container">
      <h2 class="component-title">Data Grid</h2>
      
      <dx-data-grid
        [dataSource]="employees"
        [showBorders]="true"
        [filterRow]="{ visible: true }"
        [headerFilter]="{ visible: true }"
        [groupPanel]="{ visible: true }"
        [allowColumnReordering]="true"
        [allowColumnResizing]="true"
        [columnAutoWidth]="true"
        [showRowLines]="true"
        [rowAlternationEnabled]="true"
        [paging]="{ enabled: true, pageSize: 10 }"
        [pager]="{ showPageSizeSelector: true, allowedPageSizes: [5, 10, 20] }"
        [searchPanel]="{ visible: true, width: 240, placeholder: 'Search...' }"
        [export]="{ enabled: true }"
        [grouping]="{ autoExpandAll: false }"
      >
        <dxi-column dataField="ID" caption="ID" [width]="80" [allowGrouping]="false"></dxi-column>
        <dxi-column dataField="FirstName" caption="First Name"></dxi-column>
        <dxi-column dataField="LastName" caption="Last Name"></dxi-column>
        <dxi-column dataField="Position" caption="Position"></dxi-column>
        <dxi-column dataField="Department" caption="Department"></dxi-column>
        <dxi-column dataField="HireDate" caption="Hire Date" dataType="date"></dxi-column>
        <dxi-column dataField="Salary" caption="Salary" dataType="number" format="currency"></dxi-column>
        <dxi-column dataField="Active" caption="Active" dataType="boolean"></dxi-column>
        
        <dxo-selection mode="multiple"></dxo-selection>
        <dxo-sorting mode="multiple"></dxo-sorting>
        <dxo-filtering mode="row"></dxo-filtering>
      </dx-data-grid>
      
      <div class="mt-20">
        <h3>Features Demonstrated:</h3>
        <ul>
          <li>Sorting (multiple columns)</li>
          <li>Filtering (row and header filters)</li>
          <li>Grouping with panel</li>
          <li>Paging with page size selector</li>
          <li>Search panel</li>
          <li>Column reordering and resizing</li>
          <li>Row selection (multiple)</li>
          <li>Export to Excel</li>
          <li>Alternating row colors</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class DataGridComponent {
  employees = [
    {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
      Position: 'CEO',
      Department: 'Executive',
      HireDate: new Date(2010, 1, 1),
      Salary: 150000,
      Active: true
    },
    {
      ID: 2,
      FirstName: 'Sandra',
      LastName: 'Johnson',
      Position: 'CTO',
      Department: 'Executive',
      HireDate: new Date(2012, 3, 15),
      Salary: 130000,
      Active: true
    },
    {
      ID: 3,
      FirstName: 'Michael',
      LastName: 'Smith',
      Position: 'Senior Developer',
      Department: 'IT',
      HireDate: new Date(2015, 6, 1),
      Salary: 95000,
      Active: true
    },
    {
      ID: 4,
      FirstName: 'Sarah',
      LastName: 'Williams',
      Position: 'Developer',
      Department: 'IT',
      HireDate: new Date(2018, 1, 10),
      Salary: 85000,
      Active: true
    },
    {
      ID: 5,
      FirstName: 'Robert',
      LastName: 'Brown',
      Position: 'Developer',
      Department: 'IT',
      HireDate: new Date(2019, 5, 20),
      Salary: 80000,
      Active: true
    },
    {
      ID: 6,
      FirstName: 'Emily',
      LastName: 'Davis',
      Position: 'QA Engineer',
      Department: 'QA',
      HireDate: new Date(2017, 2, 28),
      Salary: 75000,
      Active: true
    },
    {
      ID: 7,
      FirstName: 'David',
      LastName: 'Wilson',
      Position: 'QA Engineer',
      Department: 'QA',
      HireDate: new Date(2020, 8, 15),
      Salary: 70000,
      Active: true
    },
    {
      ID: 8,
      FirstName: 'Jennifer',
      LastName: 'Taylor',
      Position: 'HR Manager',
      Department: 'HR',
      HireDate: new Date(2014, 11, 1),
      Salary: 90000,
      Active: true
    },
    {
      ID: 9,
      FirstName: 'James',
      LastName: 'Anderson',
      Position: 'Marketing Specialist',
      Department: 'Marketing',
      HireDate: new Date(2016, 4, 15),
      Salary: 65000,
      Active: false
    },
    {
      ID: 10,
      FirstName: 'Lisa',
      LastName: 'Thomas',
      Position: 'Marketing Specialist',
      Department: 'Marketing',
      HireDate: new Date(2021, 0, 10),
      Salary: 60000,
      Active: true
    },
    {
      ID: 11,
      FirstName: 'Daniel',
      LastName: 'Jackson',
      Position: 'Sales Representative',
      Department: 'Sales',
      HireDate: new Date(2013, 7, 1),
      Salary: 72000,
      Active: true
    },
    {
      ID: 12,
      FirstName: 'Olivia',
      LastName: 'White',
      Position: 'Sales Representative',
      Department: 'Sales',
      HireDate: new Date(2022, 3, 25),
      Salary: 68000,
      Active: true
    }
  ];
}
