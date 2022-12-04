// این کامپوننت صفحه ای است که جزئیات هرمحصول رو نمایش میده
// import React , {useState , useEffect} from "react";
import React , { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useParams , useNavigate } from "react-router-dom";
import { Row, Col , ListGroup, Image, Button } from "react-bootstrap";
import { productDetailAction } from "../action/productAction";

// import products from '../products'


const Product = ()=>{
    

    // {
    // کدهای کامنت شده زیر برای وقتی هست که بخواهیم اطلاعات محصول از فایل داخل پروژه بگیریم اگه اطلاعات در بک اند باشه باید از یوزافکت استفاده کرد

    // // می دانیم بر اساس ایدی که در یوآرال میاد یعنی روی یک محصول مورد نظر کلیک شده و باید صفحه ی آن نمایش داده شود
    // // در ارایه ی محصولات فایند می زنیم
    // // می گوییم هرجا ایدی یک محصول در ارایه برابر بود با ایدی محصولی که کلیک شده و ایدی اون در یوآر ال هست
    // // اون محصول فایند میشه
    // const product =  products.find((item)=>{
    //     return item._id === id
    //     // ایدی زرد رنگ ایدی داینامیک هرمحصوله که در یوآرال اومده
    // })
    // // تابع فایند مقدار پروداکتی که ایدی اون با ایدی محصول داخل یوآرال یکی بود رو پیدا میکنه

    // }

    // ایدی که یوز پارامس برمیگردونه ایدی هرمحصول خاص در یوآرال هست
    const {id} = useParams()
    const history = useNavigate()
    const dispatch = useDispatch()
    // خروجی یوز دیسپچ یک دیس پچ هست
    // و چون دیپسپچ یک درخواست ای پی ای رو داره در خودش اونو در یوز افکت فراخوانی میکنیم
    // const match = useMatch()

    const productDetail = useSelector((state)=>state.productDetail)

     const {loading , product} = productDetail
    // مقدار لودینگ رو بصورت شرطی در جی اس ایکس میاریم
    // یعنی اگر لودینگ وجود داشت بزن در حال دریافت محصول
    // در غیر این صورت مقدار جی اس ایکس یک محصول رو نمایش بده


     useEffect(()=>{
         dispatch(productDetailAction(id))
            // ورودی دیسپچ تابع مربوط به اکشن جزئیات محصوله
     },[dispatch,id])


     


    const addToCartHandler =()=>{
        // می خواهیم زمانی که روی دکمه ی افزودن به سبد خرید کلیک شد
        // ریدایرکت بشه به صفحه ی سبد خرید برای اون محصول مورد نظر
        // بجای استفاده از کامپوننت نویگیت باید از یوزنویگیت استفاده کنی
        history(`/cart/${id}`)
    }

    return(
        // حالا که اون محصولی که روش کلیلک شده رو پیدا کردی باید مشخصات اون رو نمایش بدی
        <div>
            <Link to="/" className="btn btn-light my-3">
                بازگشت به صفحه ی اصلی
            </Link>

            {loading ? (
                <h2>در حال دریافت محصول...</h2>
            ):(
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
                    <Button 
                    onClick={addToCartHandler}
                    className="btn-block" 
                    type="button">
                        افزودن به سبد خرید
                    </Button>
                </Col>
            </Row>
            )}
           
        </div>
    )

  }

    // {

    // زمانی که اطلاعات جیسون محصول در بک اند باشه باید با اکسیوس اونارو از بک اند بگیری
    // اما چون بک اند پروژه اینجا کار نمیکرد اطلعات از فایل داخل اس ار سی گرفتیم

    // // چون می خواهیم از اکسیوس استفاده کنیم به تابع فایند بالا نیازی نداریم
    // const {id} = useParams()
    // const match = useMatch()
    // const [product , setProduct] = useState({})
    
     
    // useEffect(()=>{
    //      const sendRequst = async ()=>{
    //      const response = await axios.get(`http://localhost:8000/api/products/${match.id}`)
    //      setProduct(response.data)
    //     }
    //     sendRequst()
    // },[match, id]) 

    // }



    

    // {

    // const dispatch = useDispatch()
    // خروجی یوز دیسپچ یک دیس پچ هست
    // و چون دیپسپچ یک درخواست ای پی ای رو داره در خودش اونو در یوز افکت فراخوانی میکنیم

    // const {id} = useParams()
    // const match = useMatch()

    // const productDetail = useSelector((state)=>{
    //         state.productDetail
    //    })

    // const {loading , product} = productDetail
    // مقدار لودینگ رو بصورت شرطی در جی اس ایکس میاریم
    // یعنی اگر لودینگ وجود داشت بزن در حال دریافت محصول
    // در غیر این صورت مقدار جی اس ایکس یک محصول رو نمایش بده


    // useEffect(()=>{
    //      dispatch(producyDetailAction(match.id))
            // ورودی دیسپچ تابع مربوط به اکشن جزئیات محصوله
    //  },[dispatch , match])


    // }




export default Product