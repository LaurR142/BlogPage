import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './layouts/column/column.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [ColumnComponent, HeaderComponent],
  imports: [
    CommonModule,RouterModule,
  ],
exports: [ ColumnComponent]


})
export class SharedModule { }
