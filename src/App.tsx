import { Provider } from "react-redux";
import { Home } from "./containers";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
