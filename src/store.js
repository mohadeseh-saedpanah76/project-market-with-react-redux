import {createStore , combineReducer , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// تابع کامباین ردیوسر یک تابع کمکی است و کمک میکند ابجکتی ریترن کنیم که ولیوهای متفاوتی داشته باشد
// به عبارت دیگر میتونیم اگر چندتا ردیوسر داریم انها را به کمک این تابع ادغام کنیم
// تانک یک میدلور هست حالا برای استفاده از این میدلور ابتدا باید اپلای میدلور رو ایمپورت کنیم
// از تانک برای مدیریت درخواست های ای پی ای استفاده میشه در پروژه های بزرگ

import { productListReducer , productDetailReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReduser'

const reducer = combineReducer({
    productList : productListReducer,
    productDetail : productDetailReducer,
    // در پروداکت لیست استیت لیست محصولات قرار دارد
    // در پروداکت دیتیلز استیت جزئیات هر محصول قرار داره

    cartList : cartReducer,
})
// ورودی تابع بالا یک ابجکته که ردیوسر های مختلف اگر داشته باشیم در ان قرار میگیرد
// یعنی اگر چندین تابع ردیوسر داشته باشیم انهارا کنار هم در ابجکت ورودی تابع کامباین ردیوسر میذاریم

// چون می خواهیم مقادیر داخل سبد خرید در لوکال استورج ذخیره شوند در فایل کارت اکشن
// پس اینجا هم باید بریم به لوکال استورج و ببینیم مقادیر سبد خرید اگر در لوکال هستند بیارشون بیرون و اگر نیستند ارایه ی خالی بده
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') 
    ? JSON.stringify(localStorage.getItem('cartItems'))
    : []
const initialState = {
    // باید به استیت سبد خرید یک مقدار اولیه بدی
    // که مقدار اولیه ی اون چیزیه که از لوکال استورج هست
    cart : {cartItems : cartItemsFromLocalStorage}
}
// استیت اولیه ابجکتی از اطلاعات محصولات هست

// نحوه ی استفاده تانک
const middleware = [thunk]

const store = createStore(reducer , initialState , applyMiddleware(...middleware))
// ورودی اول تابع کریت استور همان ردیوسر ها هستند
// کریت استور میتونه یک ورودی دیگر هم داشته باشد یعنی استیت اولیه
// ورودی سوم این تابع اپلای میدلور هست که ارگومان ان تمام میدلورهای موجوده

export default store