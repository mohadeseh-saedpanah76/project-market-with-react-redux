import React  from "react";
import { Row, Col } from "react-bootstrap";
// import axios from "axios";
// چون فایل جیسون محصولات در بک اند هست باید با استفاده از اکسیوس اونارو بگیریم از بک اند
// و اینجا به استیت نیاز داریم

import Product from "../components/Product/Product";

import products from "../products";


const Home =()=>{

     // زمانی که اطلاعات جیسون محصول در بک اند باشه باید با اکسیوس اونارو از بک اند بگیری
    // اما چون بک اند پروژه اینجا کار نمیکرد اطلعات از فایل داخل اس ار سی گرفتیم

    // const [products , setProducts] = useState([])

    // useEffect(()=>{
    //     const sendRequest = async ()=>{
    //      const response =  await axios.get('http://localhost:8000/api/products')
    //     //  اپدیت استیت باید در تابع ایسینک باشه
    //      setProducts(response.data)
    //     }

    //     // تابع ایسینک داخل یوز افمت باید فراخوانی شود
    //     sendRequest()
    // },[])

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