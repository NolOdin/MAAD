import React, { Component } from 'react';
import CarouselBox from './carouselbox/carouselbox.js';
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
	render() {
		return (
			<>
				<CarouselBox />
				<Container>
					<h2 className="text-center m-4">Out Team</h2>
					<CardDeck>
						<Card bg="secondary">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/4440123/pexels-photo-4440123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>Developer</Card.Title>
								<Card.Text>
									Reference site about Lorem Ipsum, giving information on its origins,
									as well as a random Lipsum generator
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>
						<Card bg="success">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/3166839/pexels-photo-3166839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>Developer</Card.Title>
								<Card.Text>
									Reference site about Lorem Ipsum, giving information on its origins,
									as well as a random Lipsum generator
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>
						<Card bg="warning">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							/>
							<Card.Body>
								<Card.Title>Developer</Card.Title>
								<Card.Text>
									Reference site about Lorem Ipsum, giving information on its origins,
									as well as a random Lipsum generator
								</Card.Text>
								<Button variant="primary">About team</Button>
							</Card.Body>
						</Card>
					</CardDeck>
				</Container>
			</>
		)
	}
}