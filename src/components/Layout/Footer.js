import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          COPYRIGHT 2021 edevement.com. ALL RIGHTS RESERVED
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
