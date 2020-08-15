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
  descount: Array<number>;
  
  start='Moravia';
  end='Tibás';
  total=0;
  desc=2;

  constructor(private httpClient: HttpClient) { }

  
  async getPrice(){
    let price=0;
    this.httpClient.get('http://localhost:5000//dijkstra/Moravia,Tibás').subscribe(
       (data) => {
         this.descount = data as Array<number>;
        //console.log(this.descount);
        return this.descount
        
  });
  this.total=0;
  price =0;
  for (let i=0; i<this.userdescount;i++){
    price = ((12*25)*((this.desc/100)));
    this.total+=((12*25)-price);
    if(this.desc<=90){
      this.desc+=2;}
    
    }
    console.log("Hola putos"+this.descount)
    return this.total, this.desc;
    
    
  }
    
  
  ngOnInit() {
    return "El precio es: ₡"+this.total;
  }
  descounT(){
    return "El ultimo descuento aplicado fue: "+(this.desc-2)+"%";
  }
}

//(((this.userdescount*2)/100)*(this.userdescount*(this.descount[0]*25)))