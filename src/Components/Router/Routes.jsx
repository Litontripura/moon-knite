import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home";
import MyJewelary from "../../pages/Myjewelary/MyJewelary";
import AddJwelary from "../../pages/Addjwelary/AddJwelary";
import Alljewelary from "../../pages/Alljwelary/Alljewelary";
import Blogs from "../../pages/Blogs/Blogs";
import Login from "../../layouts/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"myjewelary",
            element:<MyJewelary></MyJewelary>
        },
        {
            path:"addjewelary",
            element:<AddJwelary></AddJwelary>
        },
        {
            path:"alljewelary",
            element:<Alljewelary></Alljewelary>
        },
        {
            path:"blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"login",
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router