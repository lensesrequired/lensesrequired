import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/app.scss';
import App from 'next/app';
import Nav from '../components/shared/nav';

class MyApp extends App {
  constructor() {
    super();

    this.state = { loggedIn: false };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (<div>
      <Nav loggedIn={ this.state.loggedIn }/>
      <Component { ...pageProps } />
    </div>);
  }
}

export default MyApp;
