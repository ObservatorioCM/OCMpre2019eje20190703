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
// let viz2;
// let viz3;
declare var tableau;

@Component({
  selector: 'app-gastos-por-programa',
  templateUrl: './gastos-por-programa.component.html',
  styleUrls: ['./gastos-por-programa.component.css']
})
export class GastosPorProgramaComponent implements OnInit {
  datos;

  constructor() {
    this.datos = [
      'Abastecimiento domicializado agua',
      'Academia de Policía',
      'Actividades y promoción turística',
      'Actividades y promoción turística externa',
      'Administración General de la seguridad y protección civil',
      'Administración General del area económica',
      'Administración medio rural',
      'Alcantarillado rural',
      'Albergue Municipal (Plan Estrategico Servicios Sociales)',
      'Alcazar-Conjunto Monumental',
      'Almacén y talleres',
      'Alumbrado público',
      'Archivo',
      'Asesoría Jurídica General',
      'Atención a la ciudadanía y modernización administrativa',
      'Ayuda a grupos políticos',
      'Banda de música',
      'Bibliotecas',
      'Caminos rurales',
      'Casa de la Juventud',
      'Cementerio',
      'Centro Dia Mayores ',
      'Centro Dia Mayores Zona Norte',
      'Centro Dia Mayores Zona Sur',
      'Circuito de Jerez',
      'Ciudad europea del caballo 2.018',
      'Comercio ambulante',
      'Consejo Económico y Social',
      'Conservación de instalaciones municipales',
      'Consejo del motor',
      'Conservación y diseño jardines urbanos y periurbanos',
      'Coordinación de Distritos',
      'Coordinación de Entidades Municipales',
      'Coordinación',
      'Cultura y fiestas. Falta definir',
      'Desarrollo del medio rural',
      'Destinos turísticos inteligentes',
      'Deuda pública',
      'Disciplina urbanística',
      'Distrito Centro',
      'Distrito Este',
      'Distrito Noroeste',
      'Distrito Norte',
      'Distrito Oeste',
      'Distrito Rural',
      'Distrito Sur',
      'Edificaciones',
      'Escuela de musica',
      'Escuela de negocios',
      'Escuela de tauromaquia',
      'Fiestas populares y festejos',
      'Fiestas populares y festejos Medio Rural',
      'Flamenco',
      'Fondo de Contingencia de Ejecución Presupuestaria',
      'Fondo estatal para el empleo y sostenibilidad local.',
      'Formación interna',
      'Formacion y proyectos',
      'Funcionamiento de centros docentes de enseñanza preescolar y ',
      'Gestión administrativa de pedanías',
      'Gestión administrativa impulso económico',
      'Gestión del patrimonio',
      'Grupos políticos',
      'Igualdad y salud (Plan Estrategico Servicios Sociales)',
      'Indemnizaciones ERE',
      'Imagen y diseño',
      'Imprevistos y funciones no clasificadas',
      'Inclusion social y solidaridad (Plan Estrategico Servicios Sociales)',
      'Iniciativa Urbana Jerez Sur',
      'Inmigracion (Plan Estrategico Servicios Sociales)',
      'Instalaciones y pistas deportivas',
      'Intervención en zona (Plan Estrategico Servicios Sociales)',
      'Licencias urbanísticas',
      'Limpieza viaria',
      'Los Claustros de Santo Domingo',
      'Mantenimiento de dependencias municipales',
      'Mayores',
      'Mejoras nivel educacional estudiantes',
      'Mercados',
      'Montes Propios',
      'Movilidad urbana',
      'Museo arqueologico',
      'Oficina de proyectos',
      'Oficina del defensor de la ciudadanía',
      'Oficina de memoria historica',
      'Ordenación del tráfico y del estacionamiento',
      'Organización de actividades culturales',
      'Otras actuaciones relacionadas con medio ambiente. Educación mediambiental',
      'Otras actuaciones de protección de la salubridad pública',
      'Otras actuaciones relacionadas con medio ambiente. Prevención y calidad',
      'Otras prestaciones económicas a favor de empleados',
      'Otros mantenimientos',
      'Parque móvil',
      'Parque zoológico',
      'Participación ciudadana',
      'Patrocinio',
      'Piscinas municipales',
      'Plan actuaciones comercio local',
      'Plan contra la exclusion social',
      'Plan promocion empleo',
      'Paln turístico Jerez grandes ciudades',
      'Planeamiento y gestión urbanística',
      'Planes especiales',
      'Planes Municipales de Ordenación Urbana',
      'Policía Local',
      'Politicas activas de empleo',
      'Prestaciones complementarias (Plan Estrategico Servicios Sociales)',
      'Presupuestos participativos',
      'Prevención de riesgos laborales',
      'Prevención',
      'Primera atención (Plan Estrategico Servicios Sociales)',
      'Programa temporal paga extra 2.012',
      'Promoción cultural',
      'Promoción cultural juventud',
      'Promoción cultural. Comunicación y publicaciones',
      'Promoción de emprendedores',
      'Programa integral contra la pobreza',
      'Promoción turística Ciudad del Vino 2014',
      'Promoción y fomento del deporte',
      'Promoción y gestión de vivienda de protección pública',
      'Protección de la salubridad pública. Profilaxis vectoriales',
      'Protección y mejora del medio ambiente',
      'Recogida de residuos',
      'Servicio de asistencia jurídica',
      'Secretaría General',
      'Secretaría-Intervención ELA',
      'Servicio de atencion socioeducativa infancia y adolescencia',
      'Servicio de Consumo',
      'Servicio de Intervención',
      'Servicio de Mayordomía',
      'Servicio de Radio y TV municipal',
      'Servicio de Recaudación',
      'Servicio de Tesorería',
      'Servicios Centrales de Fomento',
      'Servicios Centrales Gobierno de la Corporación (Organos de Gobierno)',
      'Servicios Comunitarios de asistencia a personas dependientes',
      'Servicios Generales Administración Central',
      'Servicios Generales Area de la Presidencia',
      'Servicios Generales de Administración de Personal',
      'Servicios Generales de Bienestar Social',
      'Servicios Generales de Cultura',
      'Servicios Generales de Deportes',
      'Servicios Generales de Educación',
      'Servicios Generales de Infraestructura',
      'Servicios Generales de Protección Civil',
      'Servicios Generales de Urbanismo',
      'Servicios Gestión Tributaria e Inspección Fiscal',
      'Servicios informáticos internos',
      'Servicio técnico municipal',
      'Sociedad de la información',
      'Tranferencias a Mancomunidad Bahía de Cádiz',
      'Transferencias a Consorcios',
      'Transferencias a Entidades Locales Autónomas',
      'Transferencias a Entidades Locales territoriales',
      'Transporte colectivo urbano de viajeros',
      'Tratamiento a familias con menores',
      'Tratamiento de residuos urbanos',
      'Unidad de ventanilla empresarial',
      'Unidad de auditoria de la deuda',
      'unidad de transparencia',
      'Unidad de evaluación y calidad',
      'Unidad de apoyo economia social',
      'Vías públicas'
    ];
   }

  ngOnInit() {
     let vez = 0;
     initVizEjecucion('');
  //   $(function () {
  //     const configChosen = {
  //      '.chosen-select': {},
  //    };

  //    $('.chosen-select').chosen({
  //      disable_search_threshold: 10,
  //      no_results_text: 'No encuentro '
  //      // width: '65%'
  //    });

  //  });

  //   $('#chosen1').change(function () {
  //   //  initVizPersonal($(this).val());
  //   //  initVizPresupuesto($(this).val());
  //    initVizEjecucion($(this).val());
  //  });


  //  function initVizPersonal(DesPro) {
  //    vez += 1;
  //    if (vez > 1) {
  //          viz2.dispose();
  //        }
  //        const containerDivPersonal = document.getElementById('vizContainerPersonal'),
  //          // C:\Users\pc\Google Drive\Ayuntamiento\Presupuestos\2.018\2018.03.23 PdT\Extraidas 19 anexo 1
  //          urlPersonal = 'https://public.tableau.com/views/Anexo1_Presupuesto2_018/PersonalparaWEB',
  //          options = {
  //            'DesPro': DesPro,
  //            // width: 550,
  //            // height: 640,
  //            // height: (containerDiv.offsetWidth) *1 ,
  //            hideTabs: true,
  //            showShareOptions: true
  //          };
  //        viz2 = new tableau.Viz(containerDivPersonal, urlPersonal, options);
  //      }

    //  function initVizPresupuesto(DesPro) {
    //    // vez += 1;
    //    if (vez > 1) {
    //      viz3.dispose();
    //    }
    //    const containerDivGastos1 = document.getElementById('vizContainerGastos1'),
    //    // C:\Users\pc\Google Drive\Ayuntamiento\Presupuestos\2.018
    //      urlGastos1 = 'https://public.tableau.com/views/2018_03_21PresupuestoGastos2018DEFINITIVOMAM_0/Porprogramaycapitulo',
    //      options1 = {
    //        'Des Fun': DesPro,
    //        hideTabs: true
    //      };
    //    viz3 = new tableau.Viz(containerDivGastos1, urlGastos1, options1);
    //  }

     function initVizEjecucion(DesPro) {
       vez += 1;
       if (vez > 1) {
         viz.dispose();
       }
       const containerDivGastos = document.getElementById('vizContainerGastos'),
         // C:\Users\pc\Google Drive\Ayuntamiento\Presupuestos\2.018\Ejecucion\2018.10.01
         // urlGastos = 'https://public.tableau.com/views/1EstadoEjecucin2018Gastosporaplicaciones1-10-2018MAM/Hoja2',
        //  urlGastos = 'https://public.tableau.com/views/EstadoEjecucin2018Gastosporaplicaciones04-04-2019MAM/Porprograma',
         urlGastos = 'https://public.tableau.com/views/EstadoEjecucin2019Gastosporaplicacionesa03-07-2019MAM/PorProgramaWEB',
        //  https://public.tableau.com/profile/ocmjerez#!/vizhome/EstadoEjecucin2019Gastosporaplicacionesa03-07-2019MAM/PorProgramaWEB
        //  https://public.tableau.com/profile/ocmjerez#!/vizhome/?publish=yes

         options = {
           'Des Pro': DesPro,
           hideTabs: true
         };
       viz = new tableau.Viz(containerDivGastos, urlGastos, options);
     }
  }
}
