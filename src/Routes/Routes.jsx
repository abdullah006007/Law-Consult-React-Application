import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyBooking from "../Pages/MyBooking";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import LawyerDetails from "../Pages/LawyerDetails";
import Error from "../Component/Error";



export const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        errorElement: <Error></Error>,
        children:[
            {
                path:"/",
                Component:Home,
                hydrateFallbackElement:<div className="flex justify-center items-center mt-48 ">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
             </div>,               
                loader: ()=> fetch("../lawyer.json")
            },
            {
                path:"/my-booking",
                Component:MyBooking,

                hydrateFallbackElement:<div className="flex justify-center items-center py-5 hidden ">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
             </div>,
                
                loader: ()=> fetch("../lawyer.json")
            },
            {
                path:"/blogs",
                Component: Blogs,
                hydrateFallbackElement:<div className="flex justify-center items-center py-5 ">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
             </div>,
                loader: ()=>fetch("../Answer.json")
            },

            {
                path:"/contact-us",
                Component:ContactUs,
                hydrateFallbackElement:<div className="flex justify-center items-center py-5 ">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
             </div>
                

            },
            {
                path:"/lawyer-details/:id",
                Component:LawyerDetails,
                hydrateFallbackElement:<div className="flex justify-center items-center mt-72 ">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
             </div>,
                loader: ()=> fetch("../lawyer.json")
            }
        ]
    }
])