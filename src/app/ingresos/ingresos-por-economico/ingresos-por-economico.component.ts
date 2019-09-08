import { Component, OnInit } from '@angular/core';
import { GetScreenSizeService } from '../../services/get-screen-size.service';

let viz;
declare var tableau;
@Component({
  selector: 'app-ingresos-por-economico',
  templateUrl: './ingresos-por-economico.component.html',
  styleUrls: ['./ingresos-por-economico.component.css']
})
export class IngresosPorEconomicoComponent implements OnInit {
  screenSize: string;
  constructor(private getScreenSizeService: GetScreenSizeService) {}
 ngOnInit() {
  this.screenSize = this.getScreenSizeService.getIsMobileResolution();
  initViz('', this.screenSize);

  function initViz(DesEco: string, screenSize: string) {
    let urlTableau: any;
    const containerDiv = document.getElementById('vizContainerTableau');
    const urlBase = 'https://public.tableau.com/views/EstadoEjecucin2019Ingresosporaplicacionesa02-09-2019OCM/';

    switch (true) {
    case (screenSize === 'XS'):
      urlTableau = urlBase + 'PorEconomicoXS';
      break;
    case (screenSize === 'SM'):
      urlTableau = urlBase + 'PorEconomicoXS';
      break;
    case (screenSize === 'MD'):
      urlTableau = urlBase + 'PorEconomicoXL';
      break;
    case (screenSize === 'LG'):
      urlTableau = urlBase + 'PorEconomicoXL';
      break;
    case (screenSize === 'XL'):
      urlTableau = urlBase + 'PorEconomicoXL';
      break;
    default:
     // code block
  }

    const options = {
      'Des Eco': DesEco,
      hideTabs: true,
      showShareOptions: true
    };
    viz = new tableau.Viz(containerDiv, urlTableau, options);
    }
  }
}
