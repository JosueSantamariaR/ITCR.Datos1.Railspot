import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  
  constructor(private httpClient:HttpClient) { }
  cost:number;
  end:string;
  start:string;
  request:JSON;
  success:string;
  ngOnInit(): void {
    document.body.classList.add('bg-admin');
  }
  addNewRoute(){
    if (this.cost!=null&&this.end!=null&&this.start){
    this.httpClient.post(`http://localhost:5000/addEdge/${this.start},${this.end},${this.cost}`,{}).subscribe((data)=>{
        this.request=data as JSON;
        if(data){
        this.success="Success creation"  ;  }  
      });
  }}
  deleteRoute(){
    if (this.end!=null&&this.start){
      this.httpClient.get(`http://localhost:5000/ticketsActive/${this.start},${this.end}`).subscribe((data)=>{
          this.request=data as JSON;
          if(data==false){
            this.httpClient.post(`http://localhost:5000/removeEdge/${this.start},${this.end}`,{}).subscribe((data)=>{
              this.request=data as JSON;});
              this.success="Success delete"
              }  
        });
    }}
  }
    
  


