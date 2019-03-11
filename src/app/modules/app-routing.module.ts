import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CrossfitClassesComponent } from '../components/crossfit-classes/crossfit-classes.component';
import { RegisterClassComponent } from '../components/register-class/register-class.component';
import { ClassViewComponent } from '../components/class-view/class-view.component';

const routes: Route[] = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'coach/classes',
        component: CrossfitClassesComponent
    },
    {
        path: 'coach/classes/:id',
        component: ClassViewComponent
    },
    {
        path: 'coach/classes/new',
        component: RegisterClassComponent
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
