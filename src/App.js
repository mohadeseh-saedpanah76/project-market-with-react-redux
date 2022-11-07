import React from "react";
import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";


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
                    </Routes>
                </Container>    
            </main>
            <Footer/>
        </Router>
    )
}

export default App