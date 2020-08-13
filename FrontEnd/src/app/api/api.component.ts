import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent {
  users: JSON;
  error;

  constructor(private httpClient: HttpClient) {}
  getUser() {
    const name = 'Pedro';
    return name;
    //console.log(this.users);
  }
  botoncito(){
	this.httpClient.get('http://127.0.0.1:5000/users').subscribe(
		(data) => {
		  this.users = data as JSON;
		  console.log(this.users);
		},
		(error) => (this.error = error)
	  );
  }
}
