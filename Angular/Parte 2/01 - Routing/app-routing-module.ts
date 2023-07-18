import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { RenderListComponent } from "./components/render-list/render-list.component";


const routes: Routes = [
    {path: '', component: PrimeiroComponenteComponent},
    {path: 'list', component: RenderListComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}