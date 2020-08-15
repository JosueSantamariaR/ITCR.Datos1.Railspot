import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  images = ['../assets/images/cartago.jpg','../../assets/images/curridabat.jpg','../../assets/images/guadalupe.jpg',
  '../../assets/images/heredia.jpg','../../assets/images/moravia.jpg','../../assets/images/paraiso.jpg',
  '../../assets/images/sabana.jpg','../../assets/images/sanJose.jpg','../../assets/images/sanPedro.jpg',
  '../../assets/images/santoDomingo.jpg','../../assets/images/tibas.jpg','../../assets/images/tresRios.jpg','../../assets/images/zapote.jpg'];
}


