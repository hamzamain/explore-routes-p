import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  Router as Routes,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "products", element: <Products></Products> },
        { path: "about", element: <About></About> },
        { path: "*", element: <p>404</p> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
