import React from "react";
import ReactDOM  from "react-dom/client";
// import { Provider } from "react-redux";

import App from "./App";
// import store from "./store";

// بعد از نصب پکیج ریکت بوت استرپ فایل سی اس اس ان را در ایندکس ایمپورت کردیم
// با این حالا میتونیم از این پکیج استفاده کنیم
// تمام موارد داخل بوت استرپ بصورت کامپوننت قابل استفاده هستند
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App/>
)

// root.render(<Provider store={store}>
//     <App/>
// </Provider>)