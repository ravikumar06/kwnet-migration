import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service"

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  public data:any;
  rows = [];
  loading:boolean;
 
  constructor(private dataService:DataService) {
      this.data = [];
    this.loading = true;
      this.dataService.getData().subscribe(data => {
        this.loading = false;
        this.rows = data.data;

        console.log(data.data)
      })

      
   }

  ngOnInit() {
  }

  public sort(column){
    console.log(column)
  }
}
