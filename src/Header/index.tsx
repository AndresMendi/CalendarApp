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
                        <Button className="buttonStyle">
                            SIGN UP
                        </Button>
                    ) : props.loginState ? (
                        <Button className="buttonStyle">
                            LOG OUT
                        </Button>
                    ) : (
                            <Button className="buttonStyle">
                                SIGN IN
                            </Button>
                        )
                }
            </div>
        </Navbar>
    )
}

export { Header }