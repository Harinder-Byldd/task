import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedService } from '../shared.service';
export interface PeriodicElement {
  fname: string;
  lname: string;
  salary: number;
  age: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Test',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Rajveer',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Akshay',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
  {
    fname: 'Harinder',
    lname: 'Singh',
    salary: 10000,
    age: 28,
    email: 'cretivesinghharinder@gmail.com',
  },
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['fname', 'lname', 'salary','age','email','actions'];
  dataSource = ELEMENT_DATA;
  constructor(private dialogService:SharedService){

  }
  ngOnInit(): void {}
  deleteDialog(){
    this.dialogService.openDialog()
  }

}
