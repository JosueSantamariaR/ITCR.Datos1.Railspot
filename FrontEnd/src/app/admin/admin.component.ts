import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  auth: String;
  btntext: String;
  username: String;
  password: String;
  error: Boolean;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.error=false;
    this.btntext="Login";
    document.body.classList.add('bg-admin');
  }
  getAuthetication(){
    let authBody= {
      username: this.username ,
      password:this.password
    };
    this.error=false;
    this.btntext="Loading...";
    this.httpClient.post("http://localhost:5000/admin", authBody).subscribe(
       (data) => {
         if(data){
          window.location.href="http://localhost:4200/adminpage";
         }else{
           this.error = true;
           this.btntext="Login";
         }
  });
}


}
