import React from 'react';
import { Router } from 'react-router-dom';
import history from "./services/history";
import Routes from "./routes/index";
import GlobalStyles from "./components/styles/global";

function App() {
  return (
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
  );
}

export default App;
