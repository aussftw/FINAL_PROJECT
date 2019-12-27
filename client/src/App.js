import React from "react";
import { Switch, Route } from "react-router-dom";

import { Products } from "./pages/products/products";
import Home from "./pages/products/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
