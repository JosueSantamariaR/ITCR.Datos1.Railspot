import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdminComponent } from './admin/admin.component';
import { ReservationsComponent } from './reservations/reservations.component';
import	{AdminPageComponent} from './admin-page/admin-page.component'

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'graph', component: GraphComponent },
  { path:'tickets', component: TicketsComponent },
  { path:'admin', component: AdminComponent },
  {path: 'reservations', component: ReservationsComponent},
  {path: 'adminpage', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
