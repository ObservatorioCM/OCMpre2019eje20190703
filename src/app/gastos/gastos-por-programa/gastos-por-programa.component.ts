import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// href='https://github.com/ng-select/ng-select'>Open in Github</a></small></h1>
// npm install --save @ng-select/ng-select

let viz;
declare var tableau;

@Component({
  selector: 'app-gastos-por-programa',
  templateUrl: './gastos-por-programa.component.html',
  styleUrls: ['./gastos-por-programa.component.css']
})
export class GastosPorProgramaComponent implements OnInit {
   ngOnInit() {
     initVizEjecucion('');

     function initVizEjecucion(DesPro) {
       if (viz !== undefined) {viz.dispose(); }

       const containerDivGastos = document.getElementById('vizContainerGastos');
       const urlGastos = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa03-07-2019MAM/PorProgramaWEB';
       const options = {
          'Des Pro': DesPro,
           hideTabs: true
         };
       viz = new tableau.Viz(containerDivGastos, urlGastos, options);
     }
  }
}
