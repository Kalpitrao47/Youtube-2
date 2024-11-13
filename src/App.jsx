import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import store from './Utils/Store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './Components/WatchPage'
import MainContainer from './Components/MainContainer'
import CategoryContainer from './Components/CategoryContainer'


function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body/>,
    children: [
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"category",
        element:<CategoryContainer/>
      },
    ]

  }])

  return (
    <>
     <Provider store={store}>
    <div className="App">
      <Head/>
      {/* <Body/> */}
      <RouterProvider router= {appRouter}/>
      
    {/**
     * Head
     * Body
     *     SideBar
     *            MenuItems
     *     MainContainer
     *            Button List
     *            Video Container 
     *                            VideCard
     * **/}




    </div>
    </Provider>
    </>
  )
}

export default App
 