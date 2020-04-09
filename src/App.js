import React from 'react';
import { Router } from 'react-router-dom';
import history from "./services/history";
import Routes from "./routes/index";
import GlobalStyles from "./components/styles/global";
import PageTitle from "./components/common/page-title";

function App() {
  return (
      <Router history={history}>
        <PageTitle title="ShowFlix - Premium TV Service" />
        <Routes />
        <GlobalStyles />
      </Router>
  );
}

export default App;
