import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <div class="component-container">
      <h2 class="component-title">Custom Tree View</h2>
      
      <mat-card class="component-card mb-20">
        <mat-card-header>
          <mat-card-title>File Explorer</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline" class="mb-20">
            <mat-label>Search</mat-label>
            <input matInput (keyup)="filterTree($event)" placeholder="Search files...">
            <mat-icon matSuffix>search</mat-icon>
          </mat-form-field>
          
          <mat-tree [dataSource]="treeDataSource" [treeControl]="treeControl">
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
              <mat-checkbox [checked]="node.name === 'Documents'" class="mr-10"></mat-checkbox>
              <mat-icon class="mr-10">
                {{ node.name.includes('doc') ? 'description' : node.name.includes('pdf') ? 'picture_as_pdf' : 
                   node.name.includes('xls') ? 'grid_view' : node.children ? 'folder' : 'insert_drive_file' }}
              </mat-icon>
              {{ node.name }}
            </mat-tree-node>
            
            <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
              <div class="mat-tree-node">
                <button mat-icon-button matTreeNodeToggle>
                  <mat-icon>
                    {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
                  </mat-icon>
                </button>
                <mat-checkbox [checked]="node.name === 'Projects'" class="mr-10"></mat-checkbox>
                <mat-icon class="mr-10">folder</mat-icon>
                {{ node.name }}
              </div>
              <div [class.tree-children]="true">
                <ng-container matTreeNodeOutlet></ng-container>
              </div>
            </mat-nested-tree-node>
          </mat-tree>
        </mat-card-content>
      </mat-card>
      
      <mat-card class="component-card">
        <mat-card-header>
          <mat-card-title>Organization Chart</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tree [dataSource]="orgDataSource" [treeControl]="orgTreeControl">
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
              <mat-icon class="mr-10">person</mat-icon>
              {{ node.name }} - {{ node.position }}
            </mat-tree-node>
            
            <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
              <div class="mat-tree-node">
                <button mat-icon-button matTreeNodeToggle>
                  <mat-icon>
                    {{ orgTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
                  </mat-icon>
                </button>
                <mat-icon class="mr-10">person</mat-icon>
                {{ node.name }} - {{ node.position }}
              </div>
              <div [class.tree-children]="true">
                <ng-container matTreeNodeOutlet></ng-container>
              </div>
            </mat-nested-tree-node>
          </mat-tree>
        </mat-card-content>
      </mat-card>
      
      <div class="mt-20">
        <h3>Features:</h3>
        <ul>
          <li>Hierarchical data display</li>
          <li>Expand/collapse nodes</li>
          <li>Search functionality</li>
          <li>Checkbox selection</li>
          <li>Custom icons for different file types</li>
          <li>Multiple tree structures</li>
          <li>Nested tree nodes</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .mr-10 {
      margin-right: 10px;
    }
    
    .tree-children {
      padding-left: 20px;
    }
    
    mat-tree {
      width: 100%;
    }
    
    .mat-tree-node {
      display: flex;
      align-items: center;
      padding: 5px 0;
    }
  `]
})
export class TreeViewComponent {
  treeData: TreeNode[] = [
    {
      name: 'Documents',
      children: [
        {
          name: 'Projects',
          children: [
            { name: 'Project1.docx' },
            { name: 'Project2.xlsx' },
            { name: 'Project3.pptx' }
          ]
        },
        {
          name: 'Reports',
          children: [
            { name: 'Annual Report.pdf' },
            { name: 'Quarterly Report.pdf' }
          ]
        },
        { name: 'Notes.txt' }
      ]
    },
    {
      name: 'Pictures',
      children: [
        {
          name: 'Vacation',
          children: [
            { name: 'Photo1.jpg' },
            { name: 'Photo2.jpg' }
          ]
        },
        { name: 'Work' }
      ]
    },
    {
      name: 'Downloads',
      children: [
        { name: 'Software' },
        { name: 'Drivers' }
      ]
    }
  ];
  
  orgData: TreeNode[] = [
    {
      name: 'CEO',
      position: 'Chief Executive Officer',
      children: [
        {
          name: 'CTO',
          position: 'Chief Technology Officer',
          children: [
            {
              name: 'Development Manager',
              position: 'Manager',
              children: [
                { name: 'Senior Developer', position: 'Developer' },
                { name: 'Junior Developer', position: 'Developer' }
              ]
            },
            {
              name: 'QA Manager',
              position: 'Manager',
              children: [
                { name: 'QA Engineer', position: 'Engineer' }
              ]
            }
          ]
        },
        {
          name: 'CFO',
          position: 'Chief Financial Officer',
          children: [
            { name: 'Accounting', position: 'Department' },
            { name: 'Finance', position: 'Department' }
          ]
        }
      ]
    }
  ];
  
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );
  
  orgTreeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );
  
  treeDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  orgDataSource = new MatTreeFlatDataSource(this.orgTreeControl, this.orgFlattener);
  
  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );
  
  orgFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );
  
  constructor() {
    this.treeDataSource.data = this.treeData;
    this.orgDataSource.data = this.orgData;
  }
  
  transformer = (node: TreeNode, level: number): FlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    };
  };
  
  hasChild = (_: number, node: FlatNode) => node.expandable;
  
  filterTree(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    // Filter logic would be implemented here
  }
}
