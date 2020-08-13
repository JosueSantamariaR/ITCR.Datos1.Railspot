
export class Conexions{
    conexionsList=[['Paraíso', 'Cartago', 7],['Cartago', 'Tres Ríos', 12],['Tres Ríos', 'Curridabat', 6],['Tres Ríos', 'Sabanilla', 8],['Curridabat', 'San Pedro', 4],['Sabanilla', 'San Pedro', 3],['Sabanilla', 'Guadalupe', 3],['Sabanilla', 'San José', 8],['Guadalupe', 'San Pedro', 2],['San José', 'San Pedro', 4],['Tres Ríos', 'Zapote', 10],['Zapote', 'San José', 6],['Guadalupe', 'Moravia', 10],['Moravia', 'Tibás', 12],['San José', 'Tibás', 5],['Tibás', 'Santo Domingo', 4], ['Santo Domingo', 'Heredia', 5]]
    getList(){
        return this.conexionsList
    }
    getSize(){
        return this.conexionsList.length
    }
}
