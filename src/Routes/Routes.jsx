import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Product2 from "../Pages/Home/Home/Product2/Product2";
import Product1 from "../Pages/Home/Product1/Product1";
import Product3 from "../Pages/Home/Home/Product3/Product3";
import Product4 from "../Pages/Home/Home/Product4/Product4";
import Product5 from "../Pages/Home/Home/Product5/Product5";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Product1></Product1>,
          
        },
        {
          path:'/product2',
          element:<Product2></Product2>
        },
        {
          path:'/product3',
          element:<Product3></Product3>
        },
        {
          path:'/product4',
          element:<Product4></Product4>
        },
        {
          path:'/product5',
          element:<Product5></Product5>
        }
      ]
    },
  ]);