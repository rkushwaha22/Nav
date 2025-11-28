import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './componant/Home'
import SignIN from './componant/SignIN'
import SignUp from './componant/SignUp'
import Nav from './componant/Nav'
import Profile from './componant/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import View from './componant/View'
import ImageUpload from './componant/ImageUpload'
import ViewImages from './componant/ViewImages'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/signin",
        element: <SignIN />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/view",
        element: <View />
      },
      {
        path: "/ImageUpload",
        element: <ImageUpload />
      },
      {
        path: "/ViewImages",
        element: <ViewImages />
      }
    ]
  }
])
let userContext = createContext();

function App() {

  let [userdata, setUserdata] = useState("")

  return (
    <>
      <userContext.Provider value={[userdata, setUserdata]}>
        <RouterProvider router={router} />
      </userContext.Provider>

    </>
  )
}

export default App
export { userContext }
