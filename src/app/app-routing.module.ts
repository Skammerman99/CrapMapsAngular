import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {MapComponent} from './map/map.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
