import React , {useState , useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
// چون فایل جیسون محصولات در بک اند هست باید با استفاده از اکسیوس اونارو بگیریم از بک اند
// و اینجا به استیت نیاز داریم

import Product from "../components/Product/Product";


const Home =()=>{
    const [products , setProducts] = useState([])

    useEffect(()=>{
        const sendRequest = async ()=>{
         const response =  await axios.get('http://localhost:8000/api/products')
        //  اپدیت استیت باید در تابع ایسینک باشه
         setProducts(response.data)
        }

        // تابع ایسینک داخل یوز افمت باید فراخوانی شود
        sendRequest()
    },[])

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