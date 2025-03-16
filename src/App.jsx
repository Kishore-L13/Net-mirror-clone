import Body from './components/Body'
import Header from './components/Header'
import './App.css'
import { Provider } from 'react-redux'
import store from './Utils/store'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watchvideo from './components/Watchvideo'
import Demo from './components/Demo'
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
path:"/",
element:<MainContainer/>
    },{
      path:"watch",
      element:<Watchvideo/>
    },{
      path:"demo",
      element:<><Demo/> <Demo1/><Demo2/></>
    }]
  }])
  return (
    <Provider store={store}>
      <div>
        <Header/>
     <RouterProvider router={appRouter}/>
      </div></Provider>
  )
}

export default App
