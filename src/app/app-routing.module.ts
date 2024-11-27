import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CollectiblesComponent} from "./collectibles/collectibles.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'collectibles', component: CollectiblesComponent}, // add the route
  {path: '', component: HomeComponent},  // home route or default route
  {path: '**', redirectTo: ''}  // wildcard route for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
