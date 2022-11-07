import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

// بجای اینکه ورودی تابع رو پراپس بدیم و هرجا لازم بود ازکلمه ی پراپس استفاده کنیم
// می آییم مقادیری که در این تابع قراره پراپس باشند رو
//  بصورت ابجکت دیستراکچرینگ به ورودی تابع میدیم 
// و هرجا دیگه خاستیم از اون مقادیر استفاده کنیم نیاز به کلمه ی پراپس نیست
// چون تعیین کردیم اون مقدار قراره پراپس باشه
const Product = ({product})=>{
    return (
        // کامپوننت کارد نقش نگهدارنده رو داره
        <Card className="my-3 p-3 rounded">
            {/* می خواهیم عکس هر مححصول قابلیت کلیک کردن داشته باشه تا به صفحه ی جزئیات اون محصول بذه */}
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top"/>
            </Link>

            <Card.Body>
                {/* می خواهیم اسم محصول نیز مانند عکس ان قابل کلیک باشه */}
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        {product.name}
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text as='h3'>
                {product.price}
            </Card.Text>
        </Card>
    )
}

export default Product