import React , { useEffect } from "react";
import { useDispatch , useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'

import { cartAction , removeFromCart} from "../action/cartAction";

const Cart = ()=>{
  // مراحل زیر برای اضافه کردن محصول به سبد خرید است براساس آیدی محصول خاص
   const {id} = useParams()

  // با استفاده از یوز دیسپچ به اکشن ها دسترسی پیدا میکنیم
   const dispatch =  useDispatch()

  //  توابعی که در فایل  ردیوسر تعریف می شوند در استور فراخوانی میشن و در یک مقدار ریخته می شوند 
  // و از اون مقدار در یوز سلکتور استفاده می شود
   const cart =  useSelector(state => state.cart) 
   const {cartItems} = cart


  //چون کارت اکشن یک درخواست ای پی آی رو مدیریت میکنه باید از یوز افکت استفاده بشه
  //و در کارت اکشن اطلاعات محصول گرفته میشه اگر آید اون محصول وجود داشته باشد
   useEffect(() => {
    if (id) {
      // توابعی که داخل فایل مربوط به اکشن ها تعریف می شوند مستقیما در دیسپچ فراخوانی می شوند
      dispatch(cartAction(id))
    }
  }, [dispatch, id])

  // حذف یک محصول از سبد خرید باید براساس آیدی اون محصول باشه
  // چون حذف محصول از سبد خرید باعث تغییر در استیت میشه و ما داریم از ریداکس برای مدیریت استیت استفاده میکنیم
  // پس باید تابع حذف محصول در فایل کارت اکشن تعریف بشه و در فایل ردیوسر بگیم هر اکشن چکاری میکنه
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
   
    return(
        <div>
      <Row>
        <Col md={8}> 
          <h2>سبد خرید</h2>
          {cartItems.length === 0 ? (
            <p>سبد خرید خالی است</p>
          ) : (
            <ListGroup variant="flush">
                  {/* کارت ایتمز لیستی از محصولاتی است که در سبد خرید است
                  پس باید روی اون مپ بزنیم تا دونه دونه محصولات رو نمایش بدیم 
                  و مشخصا کارت ایتمز یک ارایه است*/}
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                      {/* می خواهیم هر محصول داخل یک ردیف قرار بگیره
                      که داخل هر ردیف ستون هایی داریم که اطلاعات محصول رو نمایش میده */}
                      <Row>
                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                          </Col>
                          <Col md={3}>{item.name}</Col>
                          <Col md={2}>{item.price}</Col>
                          <Col md={2}>
                            <Button
                              type="button"
                              variant="light"
                              onClick={() => removeFromCartHandler(item.product)}
                            >
                              <i className="fa fa-trash"></i>
                            </Button>
                          </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {/* تابع ردیوس میاید روی یک ارایه اجرا میشه
                قیمت های موجود در ارایه رو جمع میزنه
                ورودی دوم این تابع میگه قیمت از چند شروع بشه که میگیم صفر */}
                مجموع: {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
    )
}

export default Cart