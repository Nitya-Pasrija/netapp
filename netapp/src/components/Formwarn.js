import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formwarn() {
  return (
    <Form>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="Post Number">
        <Form.Label>Post Number</Form.Label>
        <Form.Control type="text" placeholder="Post Number" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="Post Number">
        <Form.Label>Post Author</Form.Label>
        <Form.Control type="text" placeholder="Post Author" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree information provided is true." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formwarn;