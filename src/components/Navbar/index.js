import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">billz</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;
