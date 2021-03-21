import React, { Component } from "react";
import { Media, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


export default class Itemss extends Component {
	render() {
		return (
			<Container className="p-5">
				<Row>
					<Col md="9">
						<Media className="m-5">
							<img
								width="150px"
								height="150px"
								className="mr-3"
								src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
							/>
							<Media.Body>
								<h5>Our Items</h5>
								<p>Search the full text of books. Find the perfect book
								for your purposes and discover new ones that interest you.
					 	About Google Books </p>
							</Media.Body>
						</Media>
						<Media className="m-5">
							<img
								width="150px"
								height="150px"
								className="mr-3"
								src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
							/>
							<Media.Body>
								<h5>Our Items</h5>
								<p>Search the full text of books. Find the perfect book
								for your purposes and discover new ones that interest you.
					 	About Google Books </p>
							</Media.Body>
						</Media>
						<Media className="m-5">
							<img
								width="150px"
								height="150px"
								className="mr-3"
								src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
							/>
							<Media.Body>
								<h5>Our Items</h5>
								<p>Search the full text of books. Find the perfect book
								for your purposes and discover new ones that interest you.
					 	About Google Books </p>
							</Media.Body>
						</Media>
						<Media className="m-5">
							<img
								width="150px"
								height="150px"
								className="mr-3"
								src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
							/>
							<Media.Body>
								<h5>Our Items</h5>
								<p>Search the full text of books. Find the perfect book
								for your purposes and discover new ones that interest you.
					 	About Google Books </p>
							</Media.Body>
						</Media>
						<Media className="m-5">
							<img
								width="150px"
								height="150px"
								className="mr-3"
								src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
							/>
							<Media.Body>
								<h5>Our Items</h5>
								<p>Search the full text of books. Find the perfect book
								for your purposes and discover new ones that interest you.
					 	About Google Books </p>
							</Media.Body>
						</Media>
					</Col>
					<Col md="3">
						<h5 className="text-center mt-5">Categories</h5>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>ODIN</ListGroup.Item>
								<ListGroup.Item>DVA</ListGroup.Item>
								<ListGroup.Item>TRI</ListGroup.Item>
								<ListGroup.Item>CHETIRE</ListGroup.Item>

							</ListGroup>
						</Card>
						<Card className="mt-3" bg="light">
							<Card.Body>
								<Card.Title>Side widget</Card.Title>
								<Card.Text>
									Open Library is an open, editable library catalog,
									building towards a web page for every book ever published.
									Read, borrow, and discover more than 3M books
					 </Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}