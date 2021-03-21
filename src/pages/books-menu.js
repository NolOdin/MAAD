import React from 'react';
import { Container, Button, ListGroup, Form, FormControl} from 'react-bootstrap';
import './books-menu.css'


const BooksMenu = function() {
		return (
			<Container>
				<h2 className="text-center m-4 p-1">/</h2>
				<h2 className="text-center m-4 p-3">Раздел Книг</h2>
				<ListGroup horizontal>
						  <ListGroup.Item>Все</ListGroup.Item>
						  <ListGroup.Item>Дешевые</ListGroup.Item>
						  <ListGroup.Item>Дорогие</ListGroup.Item>
						  
						  <Form inline className="float-right pl-5 pr-5">
								<FormControl
									type="text"
									placeholder="Type to search"
									className="mr-sm-2"
								/>
								<Button variant="outline-info">Search</Button>
						  </Form>
						  <h3 className=""><i className="fas fa-shopping-cart pl-5">0</i></h3>

				</ListGroup>
			</Container>

			)

		}
export default BooksMenu;