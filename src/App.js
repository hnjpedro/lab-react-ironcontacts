import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  randomIndex = () => {
    return Math.floor(Math.random() * contacts.length);
  };

  addContact = () => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contacts[this.randomIndex()]],
    }));
  };

  render() {
    const table = [];
    const imgStyle = {
      maxWidth: "50px",
    };
    for (let i = 0; i < this.state.contacts.length; i++) {
      table.push(
        <tr>
          <td>
            <img
              src={this.state.contacts[i].pictureUrl}
              alt={this.state.contacts[i].name}
              style={imgStyle}
            />
          </td>
          <td>{this.state.contacts[i].name}</td>
          <td>{this.state.contacts[i].popularity.toFixed(2)}</td>
          <td>{this.state.contacts[i].wonOscar ? "🏆" : ""}</td>
          <td>{this.state.contacts[i].wonEmmy ? "🏆" : ""}</td>
        </tr>
      );
    }

    return (
      <div>
        <div class="buttons-div">
          <button onClick={this.addContact}>Add random contact</button>
          <button>Sort alphabetically</button>
          <button>Sort by popularity</button>
        </div>
        <div className="App">
          <table>
            <tr>
              <th class="actor-pic">Picture</th>
              <th class="actor-name">Name</th>
              <th>Popularity</th>
              <th class="break-word">Won Oscar</th>
              <th class="break-word">Won Emmy</th>
            </tr>
            {table}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
