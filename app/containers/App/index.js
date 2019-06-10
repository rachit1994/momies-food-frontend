/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Register from 'containers/Register/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - Momies food"
        defaultTitle="Momies food"
      >
        <meta name="description" content="Deliver mother's love" />
      </Helmet>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
