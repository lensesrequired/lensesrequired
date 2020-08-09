import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default ({ current }) => {
  const router = useRouter();

  const links = [
    { title: 'Resume', path: '/' },
    { title: 'Projects', path: '/projects' }
  ];

  return (<Navbar bg="light" expand="sm">
    <Navbar.Brand href="/">LensesRequired - Anna Marek</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {
          links.map(({ title, path }) => (
            <Nav.Link href={ path } active={ router.pathname === path }>{ title }</Nav.Link>
          ))
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}
