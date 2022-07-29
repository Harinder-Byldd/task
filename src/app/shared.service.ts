import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(EmployeeDeleteComponent,{width:'390px',disableClose:true})
  }

  closeDialog(){
    this.dialog.closeAll()
  }
}
