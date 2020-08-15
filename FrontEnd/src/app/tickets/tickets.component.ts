import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  userID: number;
  userdescount: number;
  descount: JSON;
  
  start:string;
  end:string;
  total=0;
  desc=2;

  constructor(private httpClient: HttpClient) { }

  
  getPrice(){
    let price=0;
    this.httpClient.get('http://localhost:5000//dijkstra/',{params:{"start":this.start, "end": this.end}}).subscribe(
       (data) => {
         this.descount = data as JSON;
         this.total=0;
         price =0;
         for (let i=0; i<this.userdescount;i++){
           price = ((this.descount["cost"]*25)*((this.desc/100)));
           this.total+=((this.descount["cost"]*25)-price);
           if(this.desc<=90){
             this.desc+=2;}
           }
        
  });   
  }
}
