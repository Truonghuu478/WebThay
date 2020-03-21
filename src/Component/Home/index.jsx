import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown,Nav } from "react-bootstrap";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="Header">
       <Nav className="Nav">
       <div className="container">
       {/* <spa className="Nav-Hotline w-100 "><span className="ml-auto">0867837427</spa></div> */}
        <Navbar >
        <Navbar.Brand className="Nav__brand" href="#home"><img width="200px" height="200px" src={`img/logo.png`}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto Nav__Bar">
            <li><Nav.Link className="Nav-Link  active" data-link="link1" href="#">Home</Nav.Link></li>
            <li><Nav.Link className="Nav-Link" data-link="link2" href="#">Info </Nav.Link></li>
            <li><Nav.Link className="Nav-Link" href="#">Cervices</Nav.Link></li>
            <li> <Nav.Link className="Nav-Link" href="#">News</Nav.Link></li>
            <li><Nav.Link className="Nav-Link" href="#">About</Nav.Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     </div>
     </Nav>
    </div>
    );
  }
  componentDidMount() {}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispath => {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
