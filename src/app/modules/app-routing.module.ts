import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CrossfitClassesComponent } from '../components/crossfit-classes/crossfit-classes.component';

const routes: Route[] = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'coach/classes',
        component: CrossfitClassesComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
