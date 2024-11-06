import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import { Home, About , Contact, User, Github, githubInfoLoader } from './components/index.js';




// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children:[
//     {
//       path:"/",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:'contact',
//       element:<Contact/>
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}/>
    <Route 
    loader={githubInfoLoader}
    path='github' 
    element={<Github/>}/>

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
    // {/* <App /> */}
    
  // {/* </BrowserRouter>, */}
)
