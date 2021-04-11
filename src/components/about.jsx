import { Container, CardDeck, Card, Button } from "react-bootstrap";
import LogoM from "../assets/F-LOGO-NEW.png"

const About = function() {
		return (

			<Container className="p-5 w-50">
				<CardDeck className="pt-4">
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

export default About;