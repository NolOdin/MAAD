import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';


const BooksCard = function({title, author, price, image }) {
		return (
			<Container className="col-4 pt-3">
			
					<Card bg="secondary">
						<Card.Img
							variant="top"
							src={image}
						/>
					<Card.Body>
							<Card.Title>{title}</Card.Title>
						<Card.Text>
								{author}
						 </Card.Text>
							
						</Card.Body>
						<Card.Footer>
      						<Button variant="primary">В корзину</Button>
      						<h4 className="float-right">{price}</h4>
  						</Card.Footer>
					</Card>
			</Container>
		)
}
export default BooksCard;