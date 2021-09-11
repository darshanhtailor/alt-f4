import React, { useState , useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditorFinal from "./Components/Editor/EditorFinal";
import Projects from "./Components/Projects/Projects";
import Roadmap from "./Components/Roadmap/Roadmap";
import Home from './Components/Home'

function App() {
  return (
    <main>
      <BrowserRouter>

        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/EditorFinal" component={EditorFinal} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Roadmap" component={Roadmap} />
        </Switch>
        </BrowserRouter>

    </main>
)
}

export default App;