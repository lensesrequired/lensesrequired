import { usePathname } from 'next/navigation';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default () => {
  const pathname = usePathname();
  const links = [
    { title: 'Resume', path: '/' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <Navbar expand="sm" sticky="top" id="nav-header">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {links.map(({ title, path }) => (
            <Nav.Link href={path} active={pathname === path}>
              {title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
