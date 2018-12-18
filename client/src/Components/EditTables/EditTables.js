import React, { Component } from "react";
import "./EditTables.css";


export default class EditTables extends Component {
  constructor(props) {
    super(props);
    this.state = { valueRow: undefined,valueCol: undefined, arrayRows: [] };
  }

  //le paso el isColoRow y lo comparo con el r y el c que le puse antes:
  handleChange = (event,isColoRow) => {
  const { value } = event.target;

  // como es r, modificame este valor:
    if (isColoRow ==="r"){
  this.setState({ ...this.state, valueRow: value });
//aqui arriba ya tengo el valor del input range
}
//como es c modifica este otro value:
    else if(isColoRow==="c"){
  
  this.setState({ ...this.state, valueCol: value });
}}
    

  handleSubmit = (e) => {

      let arrayRows = [];
        for (var rows = 0; rows < this.state.valueRow; rows++){
          arrayRows[rows] = []
        
          for (var columns = 0; columns < this.state.valueCol; columns++){
                arrayRows[rows][columns] = false
            }
        }

    this.setState({...this.state, arrayRows: arrayRows})
  }

  clickedOnACell = (rowIndex, colIndex)=> {
    
      let newArray = [...this.state.arrayRows]
      newArray[rowIndex][colIndex] =  !newArray[rowIndex][colIndex];

      this.setState({...this.state, arrayRows: newArray})  
    
  } 
  
  render() {
   
    return (
      <div>
        <h1>AQUI LOS RESTAURANTES EDITAN SUS MESAS</h1>
        <div>
          <fieldset>
            <label>FILAS</label>
            <input
              value={this.state.valueRow}
              type="range"
              min="1"
              max="10"
              onChange={e => this.handleChange(e,"r")}
            />
            <h2>{this.state.valueRow}</h2>

            <label>COLUMNAS</label>
            <input
              value={this.state.valueCol}
              type="range"
              min="1"
              max="10"
              //le paso abajo la c para diferenciar en la funcion las col de las rows
              onChange={e => this.handleChange(e, "c")}
            />
           <h2>{this.state.valueCol}</h2>

            
            <button onClick={this.handleSubmit}>Generate!</button>
          </fieldset>

          <table id="planogram">
            <tbody>
              {this.state.arrayRows.map((row, rowIndex) => {

               return (<tr key={rowIndex}>
                {row.map((col, colIndex) => {
                 return (<td key={colIndex} onClick={() => this.clickedOnACell(rowIndex, colIndex)}></td>)
                    
                })}
               </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
