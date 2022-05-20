import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import Styles from './header.module.scss'

const Header = () => {
  return (
    <Navbar className={Styles.header} bg="dark" variant="dark">
      <Container>
      <Navbar.Brand className={Styles.headerBrand} href="#home">Epique.me</Navbar.Brand>
      <Nav className={Styles.navContainer}>
      <Nav.Link className={Styles.navLink} href="#home">Home</Nav.Link>
      <Nav.Link className={Styles.navLink} href="#link">Link</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Header