import React from 'react';
import { Router } from 'react-router-dom';
import history from "./services/history";
import Routes from "./routes/index";
import GlobalStyles from "./components/styles/global";
import { Helmet } from "react-helmet";

function App() {
  return (
      <Router history={history}>
        <Helmet>
            <title>ShowFlix - Premium TV Service</title>
        </Helmet>
        <Routes />
        <GlobalStyles />
      </Router>
  );
}

export default App;
