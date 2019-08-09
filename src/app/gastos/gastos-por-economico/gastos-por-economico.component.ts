import { Component, OnInit } from '@angular/core';
import { GetScreenSizeService } from '../../services/get-screen-size.service';

let viz;
declare var tableau;
@Component({
  selector: 'app-gastos-por-economico',
  templateUrl: './gastos-por-economico.component.html',
  styleUrls: ['./gastos-por-economico.component.css']
})
export class GastosPorEconomicoComponent implements OnInit {
  screenSize: string;
  constructor(private getScreenSizeService: GetScreenSizeService) {}
 ngOnInit() {
  this.screenSize = this.getScreenSizeService.getIsMobileResolution();
  initViz('', this.screenSize);

  function initViz(DesEco: string, screenSize: string) {
    let urlTableau: any;
    const containerDiv = document.getElementById('vizContainerEconomicos');
    const urlBase = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa07-08-2019MAM/';

    switch (true) {
    case (screenSize === 'XS'):
      console.log('pantalla XS');
      urlTableau = urlBase + 'PorEconomicoXS';
      break;
    case (screenSize === 'SM'):
      console.log('pantalla SM');
      urlTableau = urlBase + 'PorEconomicoXS';
      break;
    case (screenSize === 'MD'):
      console.log('pantalla MD');
      urlTableau = urlBase + 'PorEconomicoMD';
      break;
    case (screenSize === 'LG'):
      console.log('pantalla LG');
      urlTableau = urlBase + 'PorEconomicoMD';
      break;
    case (screenSize === 'XL'):
      console.log('pantalla XL');
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
