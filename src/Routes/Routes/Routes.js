import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AddTask from "../../Pages/Tasks/AddTask/AddTask";
import CompletedTask from "../../Pages/Tasks/CompletedTask/CompletedTask";
import DailyTask from "../../Pages/Tasks/DailyTask/DailyTask";
import Media from "../../Pages/Tasks/Media/Media";
import MyTask from "../../Pages/Tasks/MyTask/MyTask";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/signup', 
                element: <SignUp></SignUp>
            },
            {
                path: '/dailytask', 
                element: <DailyTask></DailyTask>
            },
            {
                path: '/addtask', 
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask', 
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask', 
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/media', 
                element: <Media></Media>
            }
        ]
    }
])

export default routes;