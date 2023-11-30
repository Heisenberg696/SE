import Summarizer from "./components/summarizer/Summarizer";
import Reader from "./components/reader/Reader";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import {
  createBrowserRouter,
  
  Outlet,
  RouterProvider,
  Routes,
} from "react-router-dom";


function App() {
  
  const Layout = () => {
  

    return(
      <div>
      <Navbar />
        <div style= {{display: "flex"}}>
        <Leftbar />
        <Outlet/>
        </div>    
      </div>
    )

  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
      {
        path:"/reader",
        element: <Reader/>
      },
      {
        path:"/summarizer",
        element: <Summarizer/>
      }
      ]
    },
  ]);

  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
