import React from "react";
import { HashRouter, Route } from "react-router-dom";
// import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      {/* <Navigation></Navigation> */}
      <Route path="/" exact={true} component={Home}></Route>
      {/* <Route path="/about" component={About}></Route> */}
      <Route path="/character/:name" component={Detail} />
    </HashRouter>
  );
}

export default App;
