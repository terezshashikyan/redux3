import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components";
import { Provider } from "react-redux";
import { Home, PokemonPage } from "./containers";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<PokemonPage />} />
          <Route path="*" element={<div>not found </div>} />
        </Route>
      </Routes>
      </Router>
    </Provider>
  );
}

export default App;
