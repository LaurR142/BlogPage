import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Card1Component } from './components/card1/card1.component';
import { Card2Component } from './components/card2/card2.component';
import { Card3Component } from './components/card3/card3.component';
import { Card4Component } from './components/card4/card4.component';



@NgModule({
  declarations: [ ComponentsComponent,
    NavbarComponent,
    Navbar2Component,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
   ],
  imports: [
    CommonModule
  ],

  exports: [  NavbarComponent,
    Navbar2Component,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
  ]
})
export class ModuleModule { }
