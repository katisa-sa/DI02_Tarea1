import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
 
  numeroAleatorio !:number;
  numeroIntroducido: number = 0;
  texto: string = "";
 
  constructor() { }
  
  generarNumeroAleatorio() {
  this.numeroAleatorio = Math.floor(Math.random() * 100);
  }

  comprobarNumero() {
    
    if (this.numeroAleatorio>this.numeroIntroducido){
      this.texto = "Introduce un número mayor.";
    } else if (this.numeroAleatorio<this.numeroIntroducido){
        this.texto = "Introduce un número menor.";
      } else if (this.numeroAleatorio==this.numeroIntroducido){
        this.texto = "Has acertado.";
      }
  }

  onClick() {
    this.comprobarNumero();
  }

  ngOnInit() {
    this.generarNumeroAleatorio();
  }

}
