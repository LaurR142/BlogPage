import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticolPageComponent } from './page/articol-page/articol-page.component';


const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
