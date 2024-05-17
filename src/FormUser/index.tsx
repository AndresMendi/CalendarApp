import { Button, Container, Form } from "react-bootstrap"
import "./FormUser.css"

function FormUser () {
    
    return (
        <Container className="formContainerStyle">
            <Container className="d-flex justify-content-between">
                <input type="datetime-local" className="fechaPersonalizada"/>

                <Form.Select className="selectPersonalizado">
                    <option>Seleccione una opción</option>
                    <option value="1">Manicura</option>
                    <option value="2">Pedicura</option>
                </Form.Select>
            </Container>
            <div className="formContainerStyle">
                <Button className="buttonStyle">
                    Registrar cita
                </Button>
            </div>
            
        </Container>
    )
}

export { FormUser }