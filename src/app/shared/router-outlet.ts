import { Routes } from "@angular/router";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { RoomComponent } from "./room/room.component";
import { ViviendaComponent } from "./vivienda/vivienda.component";
import { InmuebleComponent } from "./inmueble/inmueble.component";

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
        ]
    }
]