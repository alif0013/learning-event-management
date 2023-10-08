import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/ErrorPage/error";
import Professionals from "../Pages/Pofessionals/Professionals";
import Course from "../Pages/Course/Course";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";

const myCreatedRouter = createBrowserRouter([
        {
            path: '/',
            element: <MainLayouts></MainLayouts>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch ('/data.json')
                },
                {
                    path: '/course/:id',
                    element: <PrivateRoute> <Course></Course> </PrivateRoute>,
                    loader: ()=> fetch('/data.json')
                },
                {
                    path: '/professionals',
                    element: <PrivateRoute><Professionals></Professionals></PrivateRoute>
                },
                {
                    path: '/about',
                    element: <PrivateRoute> <About></About> </PrivateRoute>
                },
                {
                    path: 'contact',
                    element: <PrivateRoute> <Contact></Contact> </PrivateRoute>
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