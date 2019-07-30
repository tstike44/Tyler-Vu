import React, { Component } from "react";
import { Container } from "shards-react";
import NavExample from "./Components/Navbar/Navbar"
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
  render() {
    return (

      <div className="App">
        <Container>
          <NavExample />
        </Container>
      </div>

    );
  }
}

export default App;
