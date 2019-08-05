import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { IndiceComponent } from './indice/indice.component';
import { AboutComponent } from './about/about.component';
// import { IngresosPorEconomicoComponent } from './ingresos/ingresos-por-economico/ingresos-por-economico.component';
import { GastosPorProgramaComponent } from './gastos/gastos-por-programa/gastos-por-programa.component';
import { GastosPorEconomicoComponent } from './gastos/gastos-por-economico/gastos-por-economico.component';

const app_routes: Routes = [
    { path: 'home', component: IndiceComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'IngresosPorEconomico', component: IngresosPorEconomicoComponent },
    { path: 'GastosPorPrograma', component: GastosPorProgramaComponent },
    { path: 'GastosPorEconomico', component: GastosPorEconomicoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
