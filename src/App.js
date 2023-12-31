
import './App.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Dashboard from "./components/Dashboard";

import Settings from "./components/Settings";
import Main from "./components/Main";
import OtpVerification from './components/OtpVerification';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Dashboard/>
      },
      {
        path:'/settings',
        element:<Settings/>
      }
    ]
  },
  {
    path:'/otp',
    element:<OtpVerification/>
  }
 
])

function App() {
  return (
    <div className="">
    
    
    <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
