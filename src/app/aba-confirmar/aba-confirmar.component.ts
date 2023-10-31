import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aba-confirmar',
  templateUrl: './aba-confirmar.component.html',
  styleUrls: ['./aba-confirmar.component.css']
})
export class AbaConfirmarComponent {

  constructor(
    public dialogRef: MatDialogRef<AbaConfirmarComponent>,
    public dialog: MatDialog
  ){}

  close() {
    this.dialogRef.close(AbaConfirmarComponent)
  }
}
