import {Form, Button, Container } from "react-bootstrap";

const ContactUs = function() {
	return(
	<Container className="pt-5" style={{width:"500px"}}>
		<h1 className="text-center p-5">Contact us</h1>
		<Form>
			<Form.Group contralId="formBasicEmail">
				<Form.Label>Email addres</Form.Label>
				<Form.Control type="email" placeholder="Enter email"/>
				<Form.Text>
				We'll never share your email with anyone else
				</Form.Text>
			</Form.Group>
			<Form.Group contralId="formBasicPassword" >
				<Form.Label>Example textarea</Form.Label>
				<Form.Control as="textarea" rows="3" />

			</Form.Group>
			<Form.Group contralId="formBasicCheckbox" >
				<Form.Check type="checkbox" label="check me out" />
			</Form.Group>	
			<Button variant="primary" type="submit">Submit</Button>					
		</Form>
	</Container>
	)
}

export default ContactUs;