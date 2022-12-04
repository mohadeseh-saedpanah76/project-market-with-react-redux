import axios from "axios"

// تعریف اکشن ها برای لیست محصولات
export const productListAction =()=> async (dispatch)=>{
    try {
        dispatch({type :'PRODUCT_LIST_REQUSET'})
        // میگیم برای دیسپچ بالا اتفاق زیر بیوفته
        // میخواهیم چیزی که از بک اند برمیگرده فقط دیتای اون برداشته بشه
        // چیزی که توی دیتا هست همون محصولات ما هست
        const {data} = await axios.get('http://localhost:8000/api/products')

        dispatch({
            type:'PRODUCT_LIST_SUCCESS' ,
            payload : data,
        })
    } catch (error) {
        console.log(error)
    }
}

// تعریف اکشن ها برای جزئیات یک محصول

export const productDetailAction = (id)=> async(dispatch)=>{
    try {
    dispatch({type:'PRODUCT_DETAIL_REQUSET'})
      const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)

      dispatch({type:'PRODUCT_DETAIL_SUCCESS' , payload : data})
    } catch (error) {
        console.log(error)
    }
}






// نکته 
// توابع مربوط به اکشن ها در فایلی که در دام اجرا میشه فراخوانی میشه توسط دیسپچ موجود در یوز دیسپچ
// توابع ردیوسر در استور فراخوانی میشه و مقدارش در یک متغییر ریخته میشه
// و در فایلی که در دام اجرا میشه از اون متغیر در یوز سلکتور استفاده میشه