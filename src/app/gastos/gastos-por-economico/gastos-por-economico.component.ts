import { Component, OnInit } from '@angular/core';

let viz;
declare var tableau;

@Component({
  selector: 'app-gastos-por-economico',
  templateUrl: './gastos-por-economico.component.html',
  styleUrls: ['./gastos-por-economico.component.css']
})
export class GastosPorEconomicoComponent implements OnInit {

  vez = 0;

  constructor() {}

   ngOnInit() {
let vez = 0;
initVizEconomicos('');


function initVizEconomicos(DesEco) {
  vez += 1;
  if (vez > 1) {
    viz.dispose();
  }
  const containerDiv = document.getElementById('vizContainerEconomicos'),
    urlEconomicos = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa03-07-2019MAM/PorEconomicoWEB',

    options = {
      'DesEco': DesEco,
      hideTabs: true,
      showShareOptions: true
    };
      viz = new tableau.Viz(containerDiv, urlEconomicos, options);
    }
  }
}
