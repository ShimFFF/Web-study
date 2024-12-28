import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../../layout/RootLayout.tsx";
import Home from "../../pages/home/Home.tsx";
import MovieMain from "../../pages/movie/MovieMain.tsx";
import Search from "../../pages/search/Search.tsx";
import Login from "../../pages/login/Login.tsx";
import SignUp from "../../pages/login/SignUp.tsx";
import MovieCategory from "../../pages/movie/MovieCategory.tsx";
import MovieDetail from "../../pages/movie/MovieDetail.tsx";

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
                element: <MovieMain />,
            },
            {
                path: 'movies/:category',
                element: <MovieCategory />, //todo: category별로 렌더링
            },
            {
                path: `movies/detail/:movieId`,
                element: <MovieDetail />,
            }
            ,
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