import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavBar = () => {
    const divStyle = { textAlign: "center" };
    const style = { marginTop: "0.8em", marginBottom: "0.8em" };
    return (
        <Container>
            <Row style={style}>
                <Col className="col" style={divStyle}>
                    <Link
                        to={{
                            pathname: "https://www.instagram.com/club_futura/",
                        }}
                        target="_blank"
                    >
                        <img width="45em" src={logo} alt="logo" />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar;
