import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyBooking from "../Pages/MyBooking";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import LawyerDetails from "../Pages/LawyerDetails";
import { BallTriangle } from "react-loader-spinner";
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
                hydrateFallbackElement:(
                    <BallTriangle  height={80} width={80} color="#4fa94d" visible={true} 
                    wrapperClass="flex justify-center items-center mt-24 min-h-[200px]"/>
                  ),
                
                loader: ()=> fetch("../lawyer.json")
            },
            {
                path:"/my-booking",
                Component:MyBooking,

                hydrateFallbackElement:(
                    <BallTriangle height={80} width={80} color="#4fa94d" visible={true} 
                    wrapperClass="flex justify-center items-center mt-24 min-h-[200px]"/>
                  ),
                
                loader: ()=> fetch("../lawyer.json")
            },
            {
                path:"/blogs",
                Component: Blogs,
                hydrateFallbackElement:(
                    <BallTriangle height={80} width={80} color="#4fa94d" visible={true}
                    wrapperClass="flex justify-center items-center mt-24 min-h-[200px]" />
                  ),
                loader: ()=>fetch("../Answer.json")
            },
            {
                path:"/contact-us",
                Component:ContactUs
                

            },
            {
                path:"/lawyer-details/:id",
                Component:LawyerDetails,
                hydrateFallbackElement:(
                    <BallTriangle height={80} width={80} color="#4fa94d" visible={true} 
                    wrapperClass="flex justify-center items-center mt-24 min-h-[200px]"/>
                  ),
                loader: ()=> fetch("../lawyer.json")
            }
        ]
    }
])