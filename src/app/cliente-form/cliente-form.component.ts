import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import { Guid } from 'guid-typescript';
import { Cliente } from '../Cliente';
import { ClienteComponent } from '../cliente/cliente.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AbaConfirmarComponent } from '../aba-confirmar/aba-confirmar.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  formulario: any;
  clientes: Cliente[] = [];

  constructor(
    public dialogRef: MatDialogRef<ClienteFormComponent>,
    public dialog: MatDialog
  ){}

  ngOnInit(): void{
    this.clientes = [];
    this.formulario = new FormGroup({
      clienteId: new FormControl(),
      tipo: new FormControl(),
      documento: new FormControl(),
      nome: new FormControl(),
      nomeFantasia: new FormControl(),
      CEP: new FormControl(),
      endereco: new FormControl(),
      bairro: new FormControl(),
      cidade: new FormControl(),
      telefone: new FormControl(),
      email: new FormControl()
    });
  }

  gerarIdAleatorio(): string {
    const numeroAleatorio = Math.floor(Math.random() * 1000); // Altere o intervalo conforme necessário
    return `${numeroAleatorio}`;
  }

  CadastrarCliente(): void{
    this.formulario.value.clienteId = this.gerarIdAleatorio();
    const cliente: Cliente = this.formulario.value;
    this.clientes.push(cliente);
    localStorage.setItem("BD", JSON.stringify(this.clientes));
    this.formulario.reset();
  }

  close() {
    this.dialogRef.close(ClienteFormComponent)
  }

  confirmaCadastro(){
    this.dialog.open(AbaConfirmarComponent);
  }
}
