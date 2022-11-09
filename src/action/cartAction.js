import products from "../products";

export const cartAction = (id) =>(dispatch , getState)=>{

   const product = products.find((item)=>{
        return item._id === id
    })

    dispatch({
        type : 'CART_ADD_ITEM',
        payload : {
            product : product._id,
            name : product.name,
            image : product.image,
            price : product.price,
        }
    })

    localStorage.setItem('cartItems' ,JSON.stringify(getState().cart.cartItems) )

}






// اگر اطالاعات از بک اند گرفته بشه 
// هنگام تعریف تابع اکشن چون مع مقدار مشخصات محصول نیاز داریم پس باید با اکسیوس اطلاعات رو بگیریم
// import axios from "axios";
// const {id} = useParams()
// const match = useMatch()

// export const cartAction = (id)=> async (dispatch,getState)=>{
//     // اول میریم مشخصات محصول خاص رو از پایگاه میگیریم
//  const {data} = await axios.get(`http://localhost:8000/api/products/${match.id}`)

// // در دیسپچ مقادیر اکشن که تایپ و پی لود هستند مقدار دهی میشن
//  dispatch({
//     type : 'CART_ADD_ITEM',
//     payload : {
//         product : data._id,
//         name : data.name,
//         image : data.image,
//         price : data.price,
//     }
//  })


// //  حالا میخواهیم مقادیر استیت که لیست سبد خرید هست در لوکال استورج هم ذخیره بشه
// // مقداری که در کارت ایتم باید ذخیره بشه همان استیت سبد خریده
// // چون استیت سبد خرید در فایل ردیوسر تعریف شده
// // برای دسترسی به اون از متد گت استیت استفاده میکنیم

// localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))
// }



// اما چون اینجا بک اند نداریم مشخصات هر محصول باید از فایل محصولات گرفته بشه


