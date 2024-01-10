import React from "react";
import "./App.css";
import MyApp from "./component/MyApp";

// here React.FC stands for react functional component.
const App: React.FC = () => {
  return (
    <div className="App">
      <MyApp />
    </div>
  );
};

export default App;
