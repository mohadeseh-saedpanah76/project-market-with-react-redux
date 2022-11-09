import React from "react";
import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Account from "./pages/Account";


const App = ()=>{
    return(
        <Router>
            <Header/>
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/product/:id" element={<Product/>}/>
                        {/* مقدار دو نقطه آیدی یک مقدار داینامیکه */}
                        {/* روت دوم ادرس صفحه ی جزئیات هر محصوله */}
                        <Route path="/cart/" >
                            <Route path=":id" element={<Cart/>} />
                            <Route path="" element={<Cart/>} />
                        </Route>
                        {/* میخواهیم روت سبد خرید به دو صورت باشه
                        هم اینکه در صفحه ی اصلی روی سبد خرید بزنی بره به اون صفحه
                        هم وقتی دکمه ی افزودن به سبد خرید رو برای یک محصول خاص زدی 
                        بره به صفه ی سبد خرید و اون محصول رو اضافه کنه
                        پس اینجا روت ما دوتا زیر مجموعه میگیره
                        روت پدر اون قسمت ادرس ثابت رو داره
                        دوتا روت فرزند داریم
                        یکیش برای وقتی روی دکمه افزودن میزنی بره به سبد خرید
                        یکی هم وقتی در صفحه ی اصلی روی ایکون سبد خرید میزنی*/}
                        <Route path="/account" element={<Account/>}/>
                    </Routes>
                </Container>    
            </main>
            <Footer/>
        </Router>
    )
}

export default App