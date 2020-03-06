import { ContactComponent } from './contact/contact.component';
import { EchipaComponent } from './echipa/echipa.component';
import { ArticoleComponent } from './articole/articole.component';
import { AcasaComponent } from './acasa/acasa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path:'acasa',component: AcasaComponent},
                        { path:'articole',component: ArticoleComponent },
                        { path:'echipa',component:EchipaComponent },
                        { path:'contact',component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
