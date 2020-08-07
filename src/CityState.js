import React, { Component } from 'react';

class CityState extends Component {
  constructor() {
    super();

    this.state = {
      cityName: 'New Orwellia',
      population: 90000,
      ministryOfJustice: [
        { department: "Unit of Thought Crimes" },
        { department: "Pre-Crime Task Force"},
        { department: "Department of Mandatory Happiness"},
      ]
    }
  }

  render () {
    return (
      <center>
      <h1>
        <div>WELCOME TO THE CITY STATE OF</div>
      </h1>
      <h2>
        <p>{this.state.cityName}, Population: {this.state.population}</p>
      </h2>
        <button onClick={() => this.setState({population: (this.state.population -= 100)}) }>
        RAISE TAXES
        </button> | <button onClick={() => this.setState({population: (this.state.population -= 350)}) }>
        FINE CITIZENS
        </button> | <button onClick={() => this.setState({population: (this.state.population -= 2468)}) }>
        FREE CRIMINALS
        </button>
      <br></br>
      <h1>THIS CITY IS PROUDLY SERVED BY:</h1>
      <div>
        {
          this.state.ministryOfJustice.map(dept => (
          <h3 key={dept.department}>{dept.department}</h3>
          ))
        }
      </div>

      </center>
    )
  };
}



export default CityState;
