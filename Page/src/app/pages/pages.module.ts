import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AcasaComponent } from './acasa/acasa.component';
import { ArticoleComponent } from './articole/articole.component';
import { EchipaComponent } from './echipa/echipa.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [AcasaComponent, ArticoleComponent, EchipaComponent, ContactComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
exports:[ AcasaComponent, ArticoleComponent, EchipaComponent, ContactComponent ]

})
export class PagesModule { }
