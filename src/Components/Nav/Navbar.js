import React from 'react'
import {
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
} from 'reactstrap'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const NaviBar = Styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  h1 {
    position: relative;
    left: 20px;
  }
  li {
    list-style: none !important;
  }
  button {
    color: red;
  }
  a {
    color: #1B2D69;
    text-decoration: none;
  }
  h4 {
    width: 100px;
  }
  a:hover {
    color: #C42F26;
  }
  #navItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    right: 10%;
    width: 50%;
    margin-right: 100px;
  }
  .dropdown {
    margin-left: 40px;
  }
  h3 {
    font-size: 27px;
    font-weight: 700;
  }
`

const NavBar = () => {
  return (
    <NaviBar>
      <NavbarBrand href='/'>
        <h1>SIRPK LOGO</h1>
      </NavbarBrand>
      <div id='navItems'>
        <NavItem>
          <Link to={'/'}>
            <h3>Titulinis</h3>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/about'}>
            <h3>Apie Mus</h3>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/contacts'}>
            <h3>Kontaktai</h3>
          </Link>
        </NavItem>
        <UncontrolledDropdown nav>
          <DropdownToggle nav>
            <h3 className={'dropdown'}>Pasirinkimai</h3>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Lorem ipsum dolor sit amet</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
            <DropdownItem>Option 4</DropdownItem>
            <DropdownItem>Option 5</DropdownItem>
            <DropdownItem>Option 6</DropdownItem>
            <DropdownItem>Option 7</DropdownItem>
            <DropdownItem>Option 8</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </NaviBar>
  )
}

export default NavBar
