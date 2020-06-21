import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import * as c from './Navbar.module.css'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const getOptionsList = (event) => {
    event.preventDefault()

    fetch('http://localhost:4000/api/v1/user/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((header) => {
        if (!header.ok) {
          throw Error(header)
        }
        return header.json()
      })
      .then((response) => {
        alert('ITEMS: successful')
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
        alert('ITEMS: failed!')
      })
  }

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} className={c.navBar} navbar>
          <Nav className={('mr-auto', c.navList)} navbar>
            <NavItem>
              <Link className={c.linkOptions} to='/'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className={c.linkOptions} to='/about'>
                About
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
