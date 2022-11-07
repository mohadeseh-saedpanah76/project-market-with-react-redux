import React from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product/Product";
import products from '../products'

const Home =()=>{
    return(
        <div>
            <h3>محصولات</h3>
            <Row>
                {products.map((item)=>{
                    return (
                        <Col sm={12} md={6} lg={4} key={item._id}>
                            <Product product ={item} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Home