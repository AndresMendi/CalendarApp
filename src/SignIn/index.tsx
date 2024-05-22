import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { BsLock } from "react-icons/bs";
import "./SignIn.css"


function SignIn(props: any) {
    return (
            <Container className="signIncontainerStyle">
                <h2>Sign In</h2>
                <Form>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">
                            <CiMail />
                        </InputGroup.Text>
                        <Form.Control
                            type="email" placeholder="name@example.com" 
                        />
                    </InputGroup>
                    <p />
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">
                            <BsLock />
                        </InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                        />
                    </InputGroup>
                    <p />
                    <Button className="buttonStyle" onClick={props.onLoginChange}>
                        Sign in
                    </Button>
                </Form>
            </Container>
    );
}

export { SignIn }