import React, { useState, useEffect } from "react";
import ProductsDataService from "../services/productsService";
import { Link } from "react-router-dom";
import LoadingMask from "react-loadingmask";
import { Container, Row, Accordion, Card } from "react-bootstrap";
import "react-loadingmask/dist/react-loadingmask.css";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [searchArtist, setSearchArtist] = useState("");
    // const [artists, setArtists] = useState(["TODOS"]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        retrieveProducts();
        // retrieveArtists();
    }, []);

    const retrieveProducts = () => {
        setLoading(true);
        ProductsDataService.getAll().then((response) => {
            const sortedProducts = response.data.products.sort(function (a, b) {
                if (a.artist < b.artist) {
                    return -1;
                }
                if (a.artist > b.artist) {
                    return 1;
                }
                return 0;
            });
            //REFACTORING 1 ARRAY POR ARTISTA
            const productsByArtists = Array.from(
                sortedProducts
                    .reduce(
                        (m, o) =>
                            m.set(o.artist, [...(m.get(o.artist) || []), o]),
                        new Map()
                    )
                    .values(),
                (a) => a
            );

            setProducts(productsByArtists);
            setLoading(false);
        });
    };

    // const retrieveArtists = () => {
    //     ProductsDataService.getArtists().then((response) => {
    //         setArtists(["TODOS"].concat(response.data));
    //     });
    // };

    // const onChangeSearchArtist = (e) => {
    //     const searchArtist = e.target.value;
    //     setSearchArtist(searchArtist);
    // };

    const refreshList = () => {
        retrieveProducts();
    };

    // const find = (query, by) => {
    //     setLoading(true);
    //     ProductsDataService.find(query, by)
    //         .then((response) => {
    //             const sortedProducts = response.data.products.sort(function (
    //                 a,
    //                 b
    //             ) {
    //                 if (a.artist < b.artist) {
    //                     return -1;
    //                 }
    //                 if (a.artist > b.artist) {
    //                     return 1;
    //                 }
    //                 return 0;
    //             });
    //             //REFACTORING 1 ARRAY POR ARTISTA
    //             const productsByArtists = Array.from(
    //                 sortedProducts
    //                     .reduce(
    //                         (m, o) =>
    //                             m.set(o.artist, [
    //                                 ...(m.get(o.artist) || []),
    //                                 o,
    //                             ]),
    //                         new Map()
    //                     )
    //                     .values(),
    //                 (a) => a
    //             );

    //             setProducts(productsByArtists);
    //             setLoading(false);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };

    // const findByArtist = () => {
    //     console.log(searchArtist);
    //     if (searchArtist === "TODOS") {
    //         refreshList();
    //     } else {
    //         find(searchArtist, "artist");
    //     }
    // };

    // const buttonStyle = { alignItems: "center" };
    // const buttonStyleRight = { alignItems: "center" };
    console.log(products);

    return (
        <LoadingMask loading={loading} text={"loading..."}>
            <Container>
                {/* <Container style={{ padding: "0", flexWrap: "nowrap" }}>
                    <Row className="justify-content-between">
                        <div className="col-12">
                            <div className="input-group">
                                <select
                                    className="form-control"
                                    onChange={onChangeSearchArtist}
                                >
                                    {artists.map((artist) => {
                                        return (
                                            <option value={artist}>
                                                {artist}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-secondary"
                                        type="button"
                                        onClick={findByArtist}
                                    >
                                        Filtrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container> */}
                <Container>
                    <div className="row">
                        {
                            //REFACTORING 1 ARRAY POR ARTISTA
                        }{" "}
                        {products.map((productsArrays) => {
                            return (
                                <Accordion style={{ padding: "0" }}>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                        >
                                            <Row>
                                                <div
                                                    className="col-1"
                                                    style={{
                                                        borderRadius: "5px",
                                                        backgroundColor:
                                                            productsArrays[0]
                                                                .color,
                                                        padding: "0",
                                                        marginLeft: "10px",
                                                    }}
                                                ></div>
                                                <h5 className="col">
                                                    <strong>
                                                        {
                                                            productsArrays[0]
                                                                .artist
                                                        }
                                                    </strong>
                                                </h5>
                                            </Row>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body
                                                style={{ padding: "8px" }}
                                            >
                                                {productsArrays.map(
                                                    (product) => {
                                                        return (
                                                            <div
                                                                className="card container"
                                                                style={{
                                                                    marginTop:
                                                                        "0.2em",
                                                                    marginBottom:
                                                                        "0.2em",
                                                                    paddingInline:
                                                                        "12px",
                                                                }}
                                                            >
                                                                <div
                                                                    className="card-header row"
                                                                    style={{
                                                                        padding:
                                                                            "12px",
                                                                    }}
                                                                >
                                                                    <h5
                                                                        className="col card-title"
                                                                        style={{
                                                                            marginBottom:
                                                                                "0",
                                                                            padding:
                                                                                "0",
                                                                        }}
                                                                    >
                                                                        <strong>
                                                                            {
                                                                                product.name
                                                                            }
                                                                        </strong>
                                                                    </h5>
                                                                </div>
                                                                <div
                                                                    className="card-body"
                                                                    style={{
                                                                        padding:
                                                                            "0",
                                                                        paddingTop:
                                                                            "5px",
                                                                        paddingBottom:
                                                                            "5px",
                                                                    }}
                                                                >
                                                                    <div className="row justify-content-between">
                                                                        <div className="col-auto">
                                                                            {
                                                                                product.description
                                                                            }{" "}
                                                                            <br />
                                                                            Disponibles:
                                                                            {
                                                                                product.state
                                                                            }
                                                                            <br />
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            Precio:
                                                                            $
                                                                            {
                                                                                product.price
                                                                            }
                                                                            <br />
                                                                            Final:
                                                                            $
                                                                            {
                                                                                product.retail
                                                                            }
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            );
                        })}
                    </div>
                </Container>
            </Container>
            <br />
        </LoadingMask>
    );
};

export default ProductsList;
