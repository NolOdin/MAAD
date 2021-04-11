import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './book-card.css';


const BookCard = (book) => {
  const { title, author, price, image, addToCart, addedCount } = book;
		return (
			<Container className="col-4 pt-4">
			
					<Card className="card h-100" bg="light">
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
      						<Button variant="secondary" onClick={addToCart.bind(this, book)} >В корзину {addedCount > 0 && `(${addedCount})`}</Button>
      						<h4 className="float-right "><i className="fas fa-rouble">{price}</i></h4>
  						</Card.Footer>
					</Card>
			</Container>
		)
}
export default BookCard;