import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/notFound/NotFound'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'

function App() {

  const route = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
      {index:true, element: <Home/>},
      {path:'about', element: <About/>},
      {path:'portofolio', element: <Portofolio/>},
      {path:'contact', element: <Contact/>},
      {path:'*', element: <NotFound/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
