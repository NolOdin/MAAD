import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from "../assets/logo1.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Itemss from "./items.js";
import Books from "./books.js";
import ContactUs from "./contactus.js";

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top" >
					<Container>
						<Navbar.Brand href="/">
							<img src={logo}
								height="50"
								width="145"
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
							<Form inline>
								<FormControl
									type="text"
									placeholder="Type to search"
									className="mr-sm-2"
								/>
								<Button variant="outline-info">Search</Button>
							</Form>



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