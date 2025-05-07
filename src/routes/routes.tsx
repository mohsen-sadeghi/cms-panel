import Products from "../pages/Products/Products"
import Comments from "../pages/Comments/Comments"
import Users from "../pages/Users/Users"
import Orders from "../pages/Orders/Orders"
import Offs from "../pages/Offs/Offs"
import AddProduct from "../pages/AddProduct/AddProduct"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"


const routes = [
    {path: "/" , element:<Home/>},
    {path: "/products/:page" , element:<Products/>},
    {path: "/addProduct" , element:<AddProduct/>},
    {path: "/comments" , element:<Comments/>},
    {path: "/users/:page" , element:<Users/>},
    {path: "/orders/:page" , element:<Orders/>},
    {path: "/offs" , element:<Offs/>},
    {path: "/login" , element:<Login/>},
]

export default routes