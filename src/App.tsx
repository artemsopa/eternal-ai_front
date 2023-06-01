import { Routes, Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";

import Home from "@/pages/Home";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
