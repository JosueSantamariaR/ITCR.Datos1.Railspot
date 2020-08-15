import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';
import { interval, Observable } from 'rxjs';
import {Conexions} from '../graph/lista';

import { HttpClient, HttpResponse } from '@angular/common/http';
import {Route} from '../graph/routes';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent  {

  graph: dracula.Graph;
  renderer: dracula.Renderer.Raphael;
  layout: dracula.Layout.Spring;
  graphConexions: Array<Route>;
  error;
  x;
  list;
  size;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    
    
    document.body.classList.add('bg-admin');
    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;

    this.graph = new Graph();
    
    this.graph.addNode('San_Jose');
    this.graph.addNode('Cartago');
    this.graph.addNode('Paraiso');
    this.graph.addNode('Tres_Rios');
    this.graph.addNode('Curridabat'); 
    this.graph.addNode('Sabanilla');
    this.graph.addNode('Zapote');
    this.graph.addNode('San_Pedro');
    this.graph.addNode('Guadalupe');
    this.graph.addNode('Tibas');
    this.graph.addNode('Moravia');
    this.graph.addNode('Santo_Domingo');
    this.graph.addNode('Heredia');
    
    //Api consume
    this.httpClient.get('http://localhost:5000/allGraph').subscribe(
      (data) => {
        this.graphConexions = data as Array<Route>;
        this.list= this.graphConexions;  
        this.size=this.graphConexions.length;
       
        for (let i=0; i<this.size; i++){
            this.addEdge(this.list[i][0],this.list[i][1],this.list[i][2]);
            }
        this.renderer = new Renderer('#paper', this.graph, 1200, 600);
        this.layout = new Layout(this.graph);
        this.renderer.draw();
      });
  }

  addEdge(from, to, weight) {
    const edgeData = {
      "weight": weight,
      "label": weight,
      "stoke": "#56f",
      "font-size": "20px"
    }

    this.graph.addEdge(from, to, edgeData)

  }

}
