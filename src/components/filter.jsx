import React from 'react';
import { Container, Nav, NavItem, NavLink, Form, FormControl } from 'react-bootstrap';
import './filter.css'



const Filter = function({setFilter, filterBy, searchQuery, setSearchQuery }) {

		return (
	<Container className="">
	<h1>BOOKS</h1>
			
      <Nav variant="pills" className="pt-5 " defaultActiveKey="all">
        <NavItem>
          <NavLink href="#" onClick={setFilter.bind(this, 'all' )} eventKey="all">Все</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={setFilter.bind(this, 'price_high' )} eventKey="cheap">Дорогие</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={setFilter.bind(this, 'price_low' )} eventKey="rich">Недорогие</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={setFilter.bind(this, 'author' )} eventKey="author">Автор</NavLink>
        </NavItem>
        <Form inline className="float-right pl-5 pr-5">
								<FormControl
									type="text"
									placeholder="Поиск ..."
									className="mr-sm-2 rounded-pill"
									onChange={e => setSearchQuery(e.target.value)}
									value={searchQuery}


								/>

								
						  </Form>
						 

			
      </Nav>
	</Container>

			)

		}
export default Filter;
