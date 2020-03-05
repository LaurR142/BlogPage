import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']

 

})
export class MainComponent implements OnInit {

  
  
  constructor() { }


  
  ngOnInit(): void {`
  <nz-pagination [nzPageIndex]="1" [nzTotal]="50"></nz-pagination>
`
  }

}
