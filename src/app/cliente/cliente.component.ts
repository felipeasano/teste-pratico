import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
//import { Guid } from 'guid-typescript';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {FormGroup, FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog'
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor(public dialog: MatDialog){}

  displayedColumns: string[] = [
    "clienteId",
    "nome",
    "endereco",
    "email"
  ];

  ngOnInit(): void{
    this.ExibirClientes();
  }

  ExibirClientes(): void{
    const dataFromLocalStorage = localStorage.getItem('BD');
    if(dataFromLocalStorage){
      this.clientes = JSON.parse(dataFromLocalStorage);
    }else{
      this.clientes = [];
    }
    console.log(this.clientes)
  }

  openForm(){
    this.dialog.open(ClienteFormComponent);
  }
}