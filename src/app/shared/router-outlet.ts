import { Routes } from "@angular/router";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { RoomComponent } from "./room/room.component";
import { ViviendaComponent } from "./vivienda/vivienda.component";
import { InmuebleComponent } from "./inmueble/inmueble.component";
import { PartnerComponent } from "./partner/partner.component";
import { DatosPersonalesComponent } from "./datos-personales/datos-personales.component";
import { PasswordComponent } from "./password/password.component";
import { DepartmentCardComponent } from "./department-card/department-card.component";

export const routeShared: Routes = [
    {
        path: '', component: ActionBarComponent,
        children:[
            {
                path: 'inmueble', component: InmuebleComponent 
            },
            {
                path: 'vivienda', component: ViviendaComponent 
            },
            {
                path: 'solicitud', component: PartnerComponent
            },
            {
                path: 'datos', component: DatosPersonalesComponent
            },
            {
                path: 'password', component: PasswordComponent  
            },
            {
                path: 'card', component: DepartmentCardComponent
            },
            {
                path: '',
                redirectTo: 'datos',
                pathMatch: 'full'
            }
        ]
    },
   
]