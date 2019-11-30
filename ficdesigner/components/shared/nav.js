import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Search } from 'semantic-ui-react';

export default class Nav extends React.Component {
  render() {
    return (
      <div className={ 'nav' }>
        <Link href='/'>
          <img src={ `${process.env.ASSET_PREFIX}/static/FicDesigner.png` } className={ 'nav-icon' }/>
        </Link>
        <Search
          loading={ false }
          onResultSelect={ () => {
          } }
          onSearchChange={ () => {
          } }
          results={ [] }
          value={ 'value' }
          { ...this.props }/>
      </div>
    );
  }
};

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
