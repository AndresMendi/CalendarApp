import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { BsLock } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import "./SignUp.css"


function SignUp() {
    return (
            <Container className="signUpcontainerStyle">
                <h2>Sign Up</h2>
                <Form>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">
                            <CiUser />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                        />
                    </InputGroup>
                    <p />
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
                    <Button className="buttonStyle">
                        Sign Up
                    </Button>
                </Form>
            </Container>
    );
}

export { SignUp }