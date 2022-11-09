// ردیوسر اینجا برای مدیریت استیتی است که مربوط به لیست همه ی محصولاته
// استیت ما یک ابجکته که لیستی از محصولات  در اون  قرار داره
export const productListReducer = (state = {products : []} , action)=>{
    switch(action.type){
        //  دو نوع کیس داریم اینجا یکی وقتی ریکوئستی داره ارسال میشه
        case 'PRODUCT_LIST_REQUSET':
            return {loading:true , products:[]}
            // همیشه در سوئیچ کیس ریترن ها در ابجکت هستند
        //  دو وقتی که ریکوئستی که ارسال شده درست بوده پس محصولات نمایش داده میشه
        case 'PRODUCT_LIST_SUCCESS':
            return {loading:false , products :action.payload}
        default :
        return state
    }
    // مقادیری که قبل ان اکشن هست باید در دیسپچ مقدار دهی شوند
}

// چون ردیوسز جزئیات یک محصول  هم راجب محصولاته پس
// توی همین فایل تابع ردیوسر مربوط به جزئیات محصول رو مینویسیم
// ردیوسر اینجا مربوط به جزئیات یک محصوله
export const productDetailReducer = (state = {product : {}} , action)=>{
    switch(action.type){
        //  دو نوع کیس داریم اینجا یکی وقتی ریکوئستی داره ارسال میشه
        case 'PRODUCT_DETAIL_REQUSET':
            return {loading:true , ...state}
            // همیشه در سوئیچ کیس ریترن ها در ابجکت هستند
        //  دو وقتی که ریکوئستی که ارسال شده درست بوده پس جزئیات یک محصول نمایش داده میشه
        case 'PRODUCT_DETAIL_SUCCESS':
            return {loading:false , product :action.payload}
        default :
        return state
    }
    // مقادیری که قبل ان اکشن هست باید در دیسپچ مقدار دهی شوند در فایلی که اکشن ها تعریف می شوند
}