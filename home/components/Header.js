import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  const links = [
    { title: 'Resume', path: '/' },
    { title: 'Projects', path: '/projects' }
  ];

  return (<Navbar expand='sm' sticky='top' id='nav-header'>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        {
          links.map(({ title, path }) => (
            <Nav.Link href={ path } active={ router.pathname === path }>{ title }</Nav.Link>
          ))
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}
