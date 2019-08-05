import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// href='https://github.com/ng-select/ng-select'>Open in Github</a></small></h1>
// npm install --save @ng-select/ng-select

declare var $: any;

let viz;
declare var tableau;

@Component({
  selector: 'app-gastos-por-programa',
  templateUrl: './gastos-por-programa.component.html',
  styleUrls: ['./gastos-por-programa.component.css']
})
export class GastosPorProgramaComponent implements OnInit {
  datos;

  constructor() {}

  ngOnInit() {
     let vez = 0;
     initVizEjecucion('');

     function initVizEjecucion(DesPro) {
       vez += 1;
       if (vez > 1) {
         viz.dispose();
       }
       const containerDivGastos = document.getElementById('vizContainerGastos'),
       urlGastos = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa03-07-2019MAM/PorProgramaWEB',
         options = {
           'Des Pro': DesPro,
           hideTabs: true
         };
       viz = new tableau.Viz(containerDivGastos, urlGastos, options);
     }
  }
}
