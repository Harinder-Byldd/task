import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private dialog:SharedService) { }

  ngOnInit(): void {
  }

  closeDialog(){
this.dialog.closeDialog()
  }

}
