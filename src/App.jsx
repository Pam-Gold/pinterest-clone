import React, { useEffect } from "react";
import "./App.css";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import ImageDetails from "./components/media-props/ImageDatails";
// import Home from "./pages/Home";
// import Search from "./pages/Search";
//

const  Home = React.lazy(()=>import('./pages/Home'))

const Notification = React.lazy(()=>import('./pages/Notification'))

const Search = React.lazy(()=>import('./pages/Search'))

function App() {
  

  const pamRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={
        
        <React.Suspense>
          <Home/>
        </React.Suspense>
        
        }/>
        <Route path="/:id" element={<ImageDetails/>} />
        <Route path="/search" element={
          <React.Suspense>
            <Search/>
          </React.Suspense>
        } />

        <Route  path="/notification" element={
          <React.Suspense>
            <Notification/>
          </React.Suspense>
        }/>
      </Route>
    )
  );

  return <RouterProvider router={pamRouter} />;
}

export default App;
