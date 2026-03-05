import Root from "../pages/root"
import MainLayout from "../pages/mainLayout";
import { createBrowserRouter } from "react-router-dom";
import DashboardStats from "../components/DashboardStats";
import AdminLayout from "../pages/adminLayout";
import AdminMessages from "../components/AdminMessage";
import AdminMedia from "../components/AdminMedia";
import AuthForm from "../components/AuthForm";
import PersistedRoute from "../auth/persistedRoute";
import ProtectedRoute from "../auth/protectedRoute";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";

    export const router = createBrowserRouter([
        {
            path : "/",
            element : <PersistedRoute/>,
            children : [
                {
                    element : <MainLayout/>,
                    children : [
                        {
                            index : true,
                            element: <Root/>
                        },
                        {
                            path : "contact",
                            element : <Contact/>
                        },
                        {
                            path : "galery",
                            element : <Portfolio/>
                        }
                    ]
                },
                {   
                    path : "auth",
                    element : <AuthForm/>
                },
                {
                    element : <ProtectedRoute/>,
                    children : [
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
                                },
                                {
                                    element : <AdminMedia/>,
                                    path : "members"
                                },
                                    {
                                    element : <AdminMedia/>,
                                    path : "settings"
                                }
                            ]
                        }
                    ]
                }
            ],
        }
    ]);

