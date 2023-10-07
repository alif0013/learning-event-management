import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/ErrorPage/error";
import Event from "../Pages/Event/Event";
import Professionals from "../Pages/Pofessionals/Professionals";

const myCreatedRouter = createBrowserRouter([
        {
            path: '/',
            element: <MainLayouts></MainLayouts>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/professionals',
                    element: <Professionals></Professionals>
                },
                {
                    path: '/event',
                    element: <Event></Event>
                },
                {
                    path: 'contact',
                    element: <Contact></Contact>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                }




            ]

        }
])
export default myCreatedRouter;