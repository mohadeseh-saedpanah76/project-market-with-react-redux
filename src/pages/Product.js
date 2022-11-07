// این کامپوننت صفحه ای است که جزئیات هرمحصول رو نمایش میده
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col , ListGroup, Image, Button } from "react-bootstrap";

import products from '../products'

const Product = ({match})=>{
    // می دانیم بر اساس ایدی که در یوآرال میاد یعنی روی یک محصول مورد نظر کلیک شده و باید صفحه ی آن نمایش داده شود
    // در ارایه ی محصولات فایند می زنیم
    // می گوییم هرجا ایدی یک محصول در ارایه برابر بود با ایدی محصولی که کلیک شده و ایدی اون در یوآر ال هست
    // اون محصول فایند میشه
    products.find((item)=>{
        return item._id === match.params.id
    })

    return(
        <div>
            Product
        </div>
    )
}

export default Product