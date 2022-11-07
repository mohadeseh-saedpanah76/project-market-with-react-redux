// این کامپوننت صفحه ای است که جزئیات هرمحصول رو نمایش میده
import React , {useState , useEffect} from "react";
import axios from "axios";
import { Link ,useParams ,useMatch  } from "react-router-dom";
import { Row, Col , ListGroup, Image, Button } from "react-bootstrap";



const Product = ()=>{

    // const {id} = useParams()
    // // می دانیم بر اساس ایدی که در یوآرال میاد یعنی روی یک محصول مورد نظر کلیک شده و باید صفحه ی آن نمایش داده شود
    // // در ارایه ی محصولات فایند می زنیم
    // // می گوییم هرجا ایدی یک محصول در ارایه برابر بود با ایدی محصولی که کلیک شده و ایدی اون در یوآر ال هست
    // // اون محصول فایند میشه
    // const product =  products.find((item)=>{
    //     return item._id === id
    //     // ایدی زرد رنگ ایدی داینامیک هرمحصوله که در یوآرال اومده
    // })
    // تابع فایند مقدار پروداکتی که ایدی اون با ایدی محصول داخل یوآرال یکی بود رو پیدا میکنه

    // چون می خواهیم از اکسیوس استفاده کنیم به تابع فایند بالا نیازی نداریم
    const {id} = useParams()
    const match = useMatch()
    const [product , setProduct] = useState({})
    
     
    useEffect(()=>{
         const sendRequst = async ()=>{
         const response = await axios.get(`http://localhost:8000/api/products/${match.params.id}`)
         setProduct(response.data)
        }
        sendRequst()
    },[match, id])


    return(
        // حالا که اون محصولی که روش کلیلک شده رو پیدا کردی باید مشخصات اون رو نمایش بدی
        <div>
            <Link to="/" className="btn btn-light my-3">
                بازگشت به صفحه ی اصلی
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                
                </Col>

                <Col md={3}>
                    <Button className="btn-block" type="button">
                        افزودن به سبد خرید
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Product