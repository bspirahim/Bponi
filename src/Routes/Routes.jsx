import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Product2 from "../Pages/Home/Home/Product2/Product2";
import Product1 from "../Pages/Home/Product1/Product1";

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
        }
      ]
    },
  ]);