import React from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

const Header = dynamic(import('../components/Header'));

export default ({ Component, pageProps }) => (
  <div style={ { margin: '10px' } }>
    <Header/>
    <div style={ { marginTop: '10px' } }>
      <Component{ ...pageProps }/>
    </div>
  </div>
)
