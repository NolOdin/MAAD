import {useState} from 'react'
import {Modal, Button, Media, Container } from 'react-bootstrap'

import './cart.css';

const Cart = ({totalPrice, count, items}) => {


	const [show, setShow] = useState(false);

	  const handleClose = () => setShow(false);
	  const handleShow = () => setShow(true);

	  return (
	<>
	      <h4 onClick={handleShow}>
	       <i className="fas fa-shopping-cart">{count > 0 && `(${count})`}</i>
	      </h4>

	      <Modal show={show} onHide={handleClose}>
	        <Modal.Header closeButton>
	          <Modal.Title>Корзина</Modal.Title>
	        </Modal.Header>
	       <Container className="pt-3">
	      	{items.map(book => <CartItems {...book} /> )}
	       </Container>
	       <h3>Итоговая цена: {totalPrice}</h3>
			<Modal.Footer>
			

			<Button variant="secondary" onClick={handleClose}>
			Отмена
			</Button>
			<Button variant="primary" id="buy_item"onClick={handleClose}>
			Оформить заказ
			</Button>
	        </Modal.Footer>
	      </Modal>
    </>
	)
}


const CartItems = ({image, title, author, id, removeFromCart, count }) => {
	return(
	<>
<Media>
			  <img
			    width={64}
			    height={64}
			    className="mr-3"
			    src={image}
			
			  />
			  <Media.Body>
			    <h5>{title}</h5>
			    <p>
			     {author}
			    </p>
			  </Media.Body>
			  <Button onClick={removeFromCart.bind(this, id)} id="delete_from_cart" >Удалить</Button>
			</Media>
	</>
	)
}


export default Cart;