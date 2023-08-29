import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PresentationComponent } from "./components/presentation/presentation.component";


const routes: Routes = [
    {path: 'todos', component: PresentationComponent},
    { path: '', redirectTo: 'todos', pathMatch: 'full'},
    { path: '**', redirectTo: 'todos' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}