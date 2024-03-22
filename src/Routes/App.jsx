    import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from "../Pages/Login";
import Admin_home from "../Componentes/Home/Admin/AdminHome";
import User_view from "../Pages/HomeUser";
import { Cotizar } from "../Componentes/Posts/ModalGamaBaja/Cotizar";
 
    const router =createBrowserRouter([
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/homeUser',
            element: <User_view />
        },
        {
            path:'/homeAdmin',
            element: <Admin_home/>
        },
        {
            path:'/cotizar',
            element:<Cotizar />
        }
 
    ]);

    function App(){


    return(
        <>
        <div>
        <RouterProvider router={router} />          
        </div>

        </>
    );
    }

    export default App;