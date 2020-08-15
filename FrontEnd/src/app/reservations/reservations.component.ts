import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsComponent {
  search:string;
  filter:string;
  request: JSON;
  items=[];
  constructor(private httpClient: HttpClient) { 
  }

  getFilter(){
    if (this.filter=="route"){
      this.httpClient.get(`http://localhost:5000/ticketsR/${this.search}`).subscribe((data)=>{
          this.request=data as JSON;
          console.log(this.request)
          this.items = Array.from({length: 10}).map((_, i) => this.request);
        
        });}
    if(this.filter=="user"){
      this.httpClient.get(`http://localhost:5000/ticketsU/${this.search}`).subscribe((data)=>{
        this.request=data as JSON;
        console.log(this.request)
        this.items = Array.from({length: 10}).map((_, i) => this.request);
      
      });
    }
    if(this.filter=="date"){
      this.httpClient.get(`http://localhost:5000/ticketsD/${this.search}`).subscribe((data)=>{
        this.request=data as JSON;
        console.log(this.request)
        this.items = Array.from({length: 10}).map((_, i) => this.request);
      
      });
    }
  }

  ngOnInit(): void {
  }
  
  
}