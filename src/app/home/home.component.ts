import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studs;
  constructor(public service:DataService) { 
    this.getData();
  }

  ngOnInit() {
  }
  getData()
  {
    this.service.getData().subscribe((res)=>{
      this.studs=res;
    })
  }

  

}
