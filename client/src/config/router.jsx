import Root from "../pages/root"
import MainLayout from "../pages/mainLayout";
import { createBrowserRouter } from "react-router-dom";
import DashboardStats from "../components/DashboardStats";
import AdminLayout from "../pages/adminLayout";
import AdminMessages from "../components/AdminMessage";
import AdminMedia from "../components/AdminMedia";


    export const router = createBrowserRouter([
        {
            path : "/",
            children : [
                {
                    element : <MainLayout/>,
                    children : [
                        {
                            index : true,
                            element: <Root/>
                        }
                    ]
                },
                {
                    element : <AdminLayout/>,
                    path : "admin",
                    children : [
                        {
                            element : <DashboardStats/>,
                            index : true
                        },
                        {
                            element : <AdminMessages/>,
                            path : "messages"
                        },
                        {
                            element : <AdminMedia/>,
                            path : "media"
                        }
                    ]
                }
            ],
        }
    ]);

