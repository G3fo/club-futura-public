import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/artists");
    };

    return (
        <Container>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "1rem",

                    margin: "1em",
                }}
            >
                <p>
                    <b>
                        Bienvenidxs a FUTURA, un espacio de arte colaborativo
                        con una curaduría que pone el ojo en el afecto.
                    </b>
                </p>
                <p>
                    <b>
                        Cada obra u objeto que pueden encontrar fue realizado a
                        mano o en pequeñas cantidades. Nuestro interés es
                        generar alianzas interdisciplinarias entre artistas y
                        proyectos autogestivos que se corren del mero interés
                        mercantil para proponer un contacto distinto entre
                        nosotrxs y el mundo material.
                    </b>
                </p>
                <p>
                    <b>
                        Si sos artistas o tenés algún proyecto propio, te
                        invitamos a sumarte y compartir este espacio. Sabemos
                        que la salida es colectiva.
                    </b>
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button className="btn-dark" onClick={handleClick}>
                    Ver artistas
                </Button>
            </div>
        </Container>
    );
};

export default Home;
