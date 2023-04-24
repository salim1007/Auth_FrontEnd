import Home from '../components/frontend/Home';
import Page403 from '../components/PageErrors/Page403';
import Page404 from '../components/PageErrors/Page404';
import Register from '../components/frontend/auth/Register';
import Login from '../components/frontend/auth/Login';


const publicRoutes = [
{ path: '/', element: <Home/> },
{ path: '/403',  element: <Page403/> },
{ path: '/404',  element: <Page404/> },
{ path: '/login', element: <Login/> },
{ path: '/register',  element: <Register/> },
];

export default publicRoutes;