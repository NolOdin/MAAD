import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from "../assets/SS-LOGO.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Itemss from "./items.jsx";
import Books from "../containers/books.js";
import ContactUs from "./contactus.jsx";
import Cart from '../containers/cart.js';
import MenuProfile from './menu-profile.jsx'
import './header.css'

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top" >
					<Container>
						<Navbar.Brand href="/">
							<img src={logo}
								height="40"
								width="70"
								className="d-inline-block align-top"
								alt=""
							/>

						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto font-weight-bold pt-2">
								<Nav.Link href="/">Дом</Nav.Link>
								<Nav.Link href="/books">Книги</Nav.Link>
								<Nav.Link href="/itemss">Канцтовары</Nav.Link>
								<Nav.Link href="/about">О нас</Nav.Link>


							</Nav>
							<MenuProfile />
							<Cart className="pr-5" />

						</Navbar.Collapse>

					</Container>

				</Navbar>

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/itemss" component={Itemss} />
						<Route exact path="/about" component={About} />
						<Route exact path="/books" component={Books} />
						<Route exact path="/contactus" component={ContactUs} />
					</Switch>
				</Router>

			</>
		)
	}
};