import React, { Component } from "react";
import "./EditTables.css";


export default class EditTables extends Component {
  constructor(props) {
    super(props);
    this.state = { value: undefined, arrayRows: [] };
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ ...this.state, value: value });
    //aqui arriba ya tengo el valor del input range
  };

  handleSubmit = (e) => {

      let arrayRows = [];
        for (var rows = 0; rows < this.state.value; rows++){
          arrayRows[rows] = []
        
          for (var columns = 0; columns < 5; columns++){
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
              value={this.state.value}
              type="range"
              min="1"
              max="10"
              onChange={e => this.handleChange(e)}
            />

            <h2>{this.state.value}</h2>
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
