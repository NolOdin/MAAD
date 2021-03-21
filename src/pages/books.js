import React, { Component } from 'react';
import {Container, CardGroup } from 'react-bootstrap';
import {setBooks} from '../actions/books';
import {connect} from 'react-redux';
import BooksMenu from './books-menu';
import BooksCard from './books-card';
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
		<BooksMenu />

	    <CardGroup className="pt-5">
	    
			{
				!isReady ? 'Загрузка....':
				 books.map(book => (<BooksCard { ...book } />))
			}
		
		</CardGroup>
	</Container>
		
		)
	}
}

const mapStateToProps = ({books}) => ({
	books: books.items,
	isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);