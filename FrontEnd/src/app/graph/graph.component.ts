import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';
import { interval } from 'rxjs';
import {Conexions} from '../graph/lista';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  graph: dracula.Graph;
  renderer: dracula.Renderer.Raphael;
  layout: dracula.Layout.Spring;

  constructor() { }

  ngOnInit(): void {
	const x= new Conexions();
	
	const list=x.getList();
	const size=x.getSize();
    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;
    

    this.graph = new Graph();

    this.graph.addNode('San José');
    this.graph.addNode('Cartago');
    this.graph.addNode('Paraíso');
    this.graph.addNode('Tres Ríos');
	this.graph.addNode('Curridabat'); 
	this.graph.addNode('Sabanilla');
	this.graph.addNode('Zapote');
	this.graph.addNode('San Pedro');
	this.graph.addNode('Guadalupe');
	this.graph.addNode('Tibás');
	this.graph.addNode('Moravia');
	this.graph.addNode('Santo Domingo');
	this.graph.addNode('Heredia');
    for (let i=0;i<size;i++){
    this.addEdge(list[i][0],list[i][1],list[i][2]);
    }

    this.renderer = new Renderer('#paper', this.graph, 1200, 600);
    this.layout = new Layout(this.graph);

    this.renderer.draw();

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
