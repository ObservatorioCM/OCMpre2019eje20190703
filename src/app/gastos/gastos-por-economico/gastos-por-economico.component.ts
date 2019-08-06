import { Component, OnInit } from '@angular/core';

let viz;
declare var tableau;
@Component({
  selector: 'app-gastos-por-economico',
  templateUrl: './gastos-por-economico.component.html',
  styleUrls: ['./gastos-por-economico.component.css']
})
export class GastosPorEconomicoComponent implements OnInit {
 ngOnInit() {
  function initViz(DesEco: string) {
  const containerDiv = document.getElementById('vizContainerEconomicos');
  const urlTableau = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa03-07-2019MAM/PorEconomicoWEB';
  const options = {
     'Des Eco': DesEco,
      hideTabs: true,
      showShareOptions: true
    };
  viz = new tableau.Viz(containerDiv, urlTableau, options);
    }
  initViz('');
  }
}
