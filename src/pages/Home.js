import React , { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
// import axios from "axios";
// چون فایل جیسون محصولات در بک اند هست باید با استفاده از اکسیوس اونارو بگیریم از بک اند
// و اینجا به استیت نیاز داریم

import Product from "../components/Product/Product";
import { productListAction } from "../action/productAction";

// import products from "../products";


const Home =()=>{

    //اگر در پروژه برای مدیریت استیت ها از ریداکس استفاده کردی از کدهای پایین استغاده کن
    // چیزی گه تا الان از ریداکس بلد بودی برای کلاس کامپوننت ها بود حالا برای فانکشنال ها فرق داره 
    // و برای اینکه در فایل اصلی بتونی از ریداکس استفاده کنی نیاز به هوک ها داری
    // دو هوک یوز دیسپچ و یوز سلکتور از پکیج ریکت ریداکس
    //  و همچنین اکشن هارو باید فراخوانی کنی

    const dispatch = useDispatch()
    // این هوک دقیقا مانند تابع مپ دیسپچ تو پراپس در کلاس هاست
    // میاد بین این فایل و اکشن ها ارتباط برقرار میکنه 
    //  چیزی که یوز دیسپچ برمیگردونه یک دیسپچه که با استفاده از اون میتونی از اکشن ها استفاده کنی

    // حالا باید استیت رو از ریداکس بگیریم و داخل برنامه نشون بدیم محصولات رو
    // برای اینکار باید از هوک یوز سلکتور استفاده کنیم
    // کار این هوک دقیقا شبیه تابع مپ استیت تو پراپس در کلاس هاست
    // میاد ارتباطی برقرار میکنه بین این فایل و استیت داخل ریداکس
    // تابع ورودی داخل یوز سلکتور میگه به کدوم قسمت استیت باید دسترسی داشته باشیم
  
    const productList = useSelector((state)=>state.productList)
         //پروداکت لیست همون قسمتی از استیت داخل ریداکسه که ما می خواهیم
         // فک کنم پروداکت لیسته داخل تابع همونی باشه که در استور مقدار پروداکت لیست ردیوسر رو در اون ریختیم
         // اینجا دیگه فایل پروداکت لیست ردیوسر رو فراخوانی نکردیم
         // اما چون در استور اونو توی پروداکت لیست قرار دادیم
         // اینجا از پروداکت لیست استفاده میکنیم

    const {loading , products} = productList
    // از پروداکت لیست مقادیر سمت چپ رو میگیریم
    //  مقدار پروداکتس میشه همون ارایه ی محصولات که در ریترن استفاده شده و لودینگ هم میتونی شرطی ازش استفاده کنیم در ریترن جی اس ایکس
    // یعنی اگر لودینگ وجود داشت بنویسه در حال دریافت محصولات در غیر این صورت کدهای جی اس ایکس رو نشون بده


    // چون اکشن های ما درخواست های ای پی آی بودند باید از اکشن ها داخل یوز افکت استفاده کنیم
    // اکشن ها داخل پروداکت لیست اکشنه
     useEffect(()=>{
        // ورودی دیسپچ همون تابعی است که اکشن ها در آن تعریف شدند
       dispatch(productListAction())
     },[dispatch])
    // دیپندسی دیسپچه چون میخواهیم هرموقع درخواستی ارسال شد این تابع اجرا بشه

    return(
        <div>
            <h3>محصولات</h3>

            {loading ? (
                <h2>در حال دریافت محصولات....</h2>
            ):(
                <Row>
                {products.map((item)=>{
                    return (
                        <Col sm={12} md={6} lg={4} key={item._id}>
                            <Product product ={item} />
                        </Col>
                    )
                })}
            </Row>
            )}
        </div>
    )
}
export default Home





    //  {

    //  زمانی که اطلاعات جیسون محصول در بک اند باشه باید با اکسیوس اونارو از بک اند بگیری
    // اما چون بک اند پروژه اینجا کار نمیکرد اطلعات از فایل داخل اس ار سی گرفتیم

    // const [products , setProducts] = useState([])

    // useEffect(()=>{
    //     const sendRequest = async ()=>{
    //      const response =  await axios.get('http://localhost:8000/api/products')
    //     //  اپدیت استیت باید در تابع ای سینک باشه
    //      setProducts(response.data)
    //     }

    //     // تابع ایسینک داخل یوز افمت باید فراخوانی شود
    //     sendRequest()
    // },[])

    //  }

   
