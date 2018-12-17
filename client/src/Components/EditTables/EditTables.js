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
    console.log(value);
    //aqui arriba ya tengo el valor del input range
  };

  handleSubmit = (e) => {
    console.log(this.state.value);

    let arrayRows = []

    for (var i = 0 ; i <this.state.value; i++){
      arrayRows.push(i)
    }

    this.setState({...this.state, arrayRows: arrayRows})
  }

  clickedOnACell() {
    console.log("You have clicked on me!!!")
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
              {this.state.arrayRows.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <td onClick={this.clickedOnACell}></td>
                    <td onClick={this.clickedOnACell}></td>
                    <td onClick={this.clickedOnACell}></td>
                    <td onClick={this.clickedOnACell}></td>
                    <td onClick={this.clickedOnACell}></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
