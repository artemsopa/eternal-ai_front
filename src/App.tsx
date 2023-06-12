import { Routes, Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";

import Home from "@/pages/Home";
import Chat from "@/pages/Chat";
import Profile from "./pages/Profile";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/:individual" component={Chat} />
      </Routes>
    </Router>
  );
};

export default App;
