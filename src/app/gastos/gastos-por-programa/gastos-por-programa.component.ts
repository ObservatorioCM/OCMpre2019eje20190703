import { Component, OnInit, ɵConsole } from '@angular/core';
import { GetScreenSizeService } from '../../services/get-screen-size.service';

let viz;
declare var tableau;
@Component({
  selector: 'app-gastos-por-programa',
  templateUrl: './gastos-por-programa.component.html',
  styleUrls: ['./gastos-por-programa.component.css']
})
export class GastosPorProgramaComponent implements OnInit {
  screenSize: string;

  constructor(private getScreenSizeService: GetScreenSizeService) {}
  ngOnInit() {
    const verHome = true;
    this.screenSize = this.getScreenSizeService.getIsMobileResolution();
    initViz('', this.screenSize);

    function initViz(DesPro: string, screenSize: string) {
      let urlTableau: any;
      const containerDiv = document.getElementById('vizContainerGastos');
      const urlBase = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa02-09-2019OCM/';
      // https://public.tableau.com/profile/ocmjerez#!/vizhome/EstadoEjecucin2019Gastosporaplicacionesa07-08-2019MAM/PorProgramaXS?publish=yes
      // https://public.tableau.com/profile/ocmjerez#!/vizhome/EstadoEjecucin2019Gastosporaplicacionesa02-09-2019OCM/PorProgramaXL?publish=yes

      switch (true) {
        case (screenSize === 'XS'):
          console.log('pantalla XS');
          urlTableau = urlBase + 'PorProgramaXS';
          break;
        case (screenSize === 'SM'):
          console.log('pantalla SM');
          urlTableau = urlBase + 'PorProgramaXS';
          break;
        case (screenSize === 'MD'):
          console.log('pantalla MD');
          urlTableau = urlBase + 'PorProgramaMD';
          break;
        case (screenSize === 'LG'):
          console.log('pantalla LG');
          urlTableau = urlBase + 'PorProgramaMD';
          break;
        case (screenSize === 'XL'):
          console.log('pantalla XL');
          urlTableau = urlBase + 'PorProgramaXL';
          break;
        default:
          // code block
      }

      const options = {
        'Des Pro': DesPro,
        hideTabs: true,
        showShareOptions: true
      };
      viz = new tableau.Viz(containerDiv, urlTableau, options);
    }
  }
}
