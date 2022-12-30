import { Component, Inject, OnInit } from '@angular/core';
import { Pensamento } from '../interfaces/pensamento';
import { PensamentoService } from '../services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [

  ]

  constructor(
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    })
  }
}
