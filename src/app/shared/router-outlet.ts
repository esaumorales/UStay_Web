import { Routes } from "@angular/router";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { RoomComponent } from "./room/room.component";

export const routeShared: Routes = [
    {
        path: '', component: ActionBarComponent,
        children:[
            {
                // path: 'room', component: RoomComponent 
            },
        ]
    }
]