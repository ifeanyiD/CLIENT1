import Root from "../pages/root"
import MainLayout from "../pages/mainLayout";
import { createBrowserRouter } from "react-router-dom";


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
                // {
                //     element : <AdminLayout/>,
                //     children : [
                //         {
                            
                //             //element : <Admin/>
                //         }
                //     ]
                // }
            ],
        }
    ]);

