import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
