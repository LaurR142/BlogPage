import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [ComponentsComponent, NavComponent, MainComponent, FooterComponent, ],
  imports: [
    CommonModule
  ],

exports:[
  NavComponent,MainComponent,FooterComponent,
]

})
export class SharedModule { }
