import React from "react";
import {Container , Row , Col} from 'react-bootstrap'
//استفاده می کنیم col و برای ساختن ستون از کامپوننت  row برای ساختن سطر از کامپوننت 

const Footer = ()=>{
    return(
        <footer>
            <Container className="text-center">
                <Row>
                    <Col>
                        Footer
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer