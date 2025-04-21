import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyBooking from "../Pages/MyBooking";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import LawyerDetails from "../Pages/LawyerDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        errorElement: <p>Error</p>,
        children:[
            {
                path:"/",
                Component:Home,
                loader: ()=> fetch("../lawyer.json")
            },
            {
                path:'/my-booking',
                Component:MyBooking
            },
            {
                path:"/blogs",
                Component: Blogs
            },
            {
                path:"/contact-us",
                Component:ContactUs

            },
            {
                path:"/lawyer-details/:id",
                Component:LawyerDetails,
                loader: ()=> fetch("../lawyer.json")
            }
        ]
    }
])