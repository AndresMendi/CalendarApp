import { Button, Navbar } from "react-bootstrap"
import { IoCalendar } from "react-icons/io5";
import "./Header.css"

function Header(props: any) {
    return (
        <Navbar className="justify-content-between navbarStyle">
            <div>
                <IoCalendar />
                Calendar App
            </div>
            <div>
                {
                    (props.signInState && !props.loginState) ? (
                        <Button className="buttonStyle" onClick={props.onSignInChange}>
                            SIGN UP
                        </Button>
                    ) : props.loginState ? (
                        <Button className="buttonStyle" onClick={props.onLoginChange}>
                            LOG OUT
                        </Button>
                    ) : (
                        <Button className="buttonStyle" onClick={props.onSignInChange}>
                            SIGN IN
                        </Button>
                    )
                }
            </div>
        </Navbar>
    )
}

export { Header }