import React, { Component } from 'react';
import {Container, CardGroup } from 'react-bootstrap';
import Filter from '../containers/filter';
import BookCard from '../containers/book-card.js';
import axios from 'axios';


class Books extends Component {
	componentWillMount(){
			const {setBooks} = this.props;
			axios.get('/books.json').then(({data}) => {
				setBooks(data);
			})
	}
	render() {

		const {books, isReady} = this.props;
		return (
	<Container >
		<Filter />

	    <CardGroup className="pt-5 col-10">
	    
			{
				!isReady ? 'Загрузка....':
				 books.map((book, i) => (<BookCard key = {i} { ...book } />))
			}
		
		</CardGroup>
	</Container>
		
		)
	}
}


export default Books;