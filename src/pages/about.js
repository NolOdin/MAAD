import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from "react-bootstrap";
import LogoM from "../assets/ITS LOGO.png"

export default class About extends Component {
	render() {
		return (

			<Container className="p-5 w-50">
				<h2 className="text-center m-4">О MAAD</h2>
				<CardDeck>
					<Card>
						<Card.Img
							variant="top"
							src={LogoM}
						/>
						<Card.Body>
							<Card.Title>Мы продаем книги по всей Республике Дагестан </Card.Title>
							<Card.Text>
								Мы рады каждому вашему заказу, ведь с каждой прочитанной книгой
								вы открываете для себя новые двери возможностей постичь всяких вершин.
							</Card.Text>
							<Button href="/contactus" variant="primary">Связаться</Button>
						</Card.Body>
					</Card>
				</CardDeck>
			</Container>

		)
	}
}