import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Main from './layouts/main';
import Cicloviajes from './pages/cicloviajes';
import News from './pages/news';
import Donations from './pages/donations';
import Pulque from './pages/pulque';
import Talleres from './pages/talleres';
import RutaPulquera from './pages/rutaPulquera';
import AboutUs from './pages/aboutUs';
import Store from './pages/Store';

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "inicio", element: <Home /> },
      { path: "cicloviajes", element: <Cicloviajes /> },
      { path: "noticias", element: <News /> },
      { path: "menu-pulquero", element: <Pulque /> },
      { path: "donaciones", element: <Donations /> },
      { path: "ruta-pulquera", element: <RutaPulquera /> },
      { path: "talleres", element: <Talleres /> },
      { path: "acerca-de", element: <AboutUs /> },
      { path: "tienda", element: <Store /> },


    ],
  },
]);





function App() {


  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
