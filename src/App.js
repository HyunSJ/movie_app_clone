import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} componetent={Home} />
      <Route path="/about" componetent={About} />
      <Route path="/Movie/:id" componetent={Detail} />
    </HashRouter>
  );
}

export default App;
