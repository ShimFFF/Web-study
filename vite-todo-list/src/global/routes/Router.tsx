import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../../layout/RootLayout.tsx";
import Home from "../../pages/home/Home.tsx";
import Movie from "../../pages/movie/Movie.tsx";
import Search from "../../pages/search/Search.tsx";
import Login from "../../pages/login/Login.tsx";
import SignUp from "../../pages/login/SignUp.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'movies',
                element: <Movie />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path : 'login',
                element: <Login />,
            },
            {
                path : 'signup',
                element: <SignUp />,
            }
        ]
    }
])