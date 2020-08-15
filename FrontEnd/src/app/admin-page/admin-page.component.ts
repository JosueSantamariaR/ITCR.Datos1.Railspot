import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  
  constructor() { }
  
  end:string;
  start:string;
  ngOnInit(): void {
    //document.body.classList.add('bg-admin');
  }
  addNewRoute(){

  }
  deleteRoute(){
    
  }
 redirectR(){
  
 }
    
  

}
