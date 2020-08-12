import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';

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

    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;

    this.graph = new Graph();

    this.graph.addNode('San José');
    this.graph.addNode('Cartago');
    this.graph.addNode('Heredia');
    this.graph.addNode('Alajuela');
    this.graph.addNode('Puntarenas');
    this.graph.addNode('Guanacaste'); 
    
    this.addEdge('Heredia', 'Cartago', 38);
    this.addEdge('Heredia', 'Guanacaste', 207);
    this.addEdge('Heredia', 'San José', 11);
    this.addEdge('Cartago', 'San José', 25);
    this.addEdge('Cartago', 'Guanacaste', 235);
    this.addEdge('Cartago', 'Alajuela', 47);
    this.addEdge('Alajuela', 'Guanacaste', 198);
    this.addEdge('San José', 'Guanacaste', 209);
    this.addEdge('Puntarenas', 'Guanacaste', 133);
    this.addEdge('Puntarenas', 'Alajuela', 86);
    this.addEdge('Puntarenas', 'Heredia', 96);
    this.addEdge('San José', 'Alajuela', 19);
    this.addEdge('Alajuela', 'Heredia', 13);

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
