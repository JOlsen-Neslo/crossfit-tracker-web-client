import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CrossfitClassesComponent } from '../components/coach/crossfit-classes/crossfit-classes.component';
import { RegisterClassComponent } from '../components/coach/register-class/register-class.component';
import { ClassViewComponent } from '../components/coach/class-view/class-view.component';
import { CoachComponent } from '../components/coach/coach.component';
import { AuthGuard } from '../guards/auth.guard';
import { ClassSummaryComponent } from '../components/coach/class-summary/class-summary.component';
import { RegisterComponent } from '../components/register/register.component';
import { TimerComponent } from '../components/coach/timer/timer.component';

const routes: Route[] = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'coach',
        component: CoachComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: ':name/classes',
                component: CrossfitClassesComponent
            },
            {
                path: ':name/classes/:id',
                component: ClassViewComponent
            },
            {
                path: ':name/class',
                component: RegisterClassComponent
            },
            {
                path: ':name/class/timer',
                component: TimerComponent
            },
            {
                path: ':name/class/summary',
                component: ClassSummaryComponent
            }
        ]
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
