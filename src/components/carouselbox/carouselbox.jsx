import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import booksImg from '../../assets/carousel/books.jpg';
import dbooksImg from '../../assets/carousel/books1.jpg';
import cbooksImg from '../../assets/carousel/books3.jpg';
//import csscarosel from './carouselbox.css';





export default class CarouselBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img width={800} height={650}
						className="d-block w-100 p-6 "
						src={booksImg}
						alt="Books"


					/>
					<Carousel.Caption>
						<h4>
							Welcome to MAAD
						</h4>
					</Carousel.Caption>

				</Carousel.Item>
				<Carousel.Item>
					<img width={800} height={650}
						className="d-block w-100 p-6"
						src={dbooksImg}
						alt="Books"


					/>
					<Carousel.Caption>
						<h3>
							Welcome to MAAD
						</h3>
					</Carousel.Caption>

				</Carousel.Item>
				<Carousel.Item>
					<img width={800} height={650}
						className="d-block w-100 p-6"
						src={cbooksImg}
						alt="Books"


					/>
					<Carousel.Caption>
						<h3>
							Welcome to MAAD
						</h3>
					</Carousel.Caption>

				</Carousel.Item>
			</Carousel>
		)
	}
}