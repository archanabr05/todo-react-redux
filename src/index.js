import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import ListContainer from "./components/ListContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ListContainer />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
