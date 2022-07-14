import React from "react";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <div className="App">
      <Search />
      <Characters />
    </div>
  );
};

export default App;
