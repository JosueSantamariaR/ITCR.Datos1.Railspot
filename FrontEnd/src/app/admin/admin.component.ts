import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  auth: String;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    document.body.classList.add('bg-admin');
  }
  getAuthetication(){
    this.httpClient.get("http://localhost:5000/admin/juan,231").subscribe(
       (data) => {
         this.auth = data as String;
         console.log(this.auth)
  });
}

  async redirect(){
    await this.getAuthetication();
    //console.log(this.auth)
    //window.location.href="http://localhost:4200/adminpage";
  }

}
