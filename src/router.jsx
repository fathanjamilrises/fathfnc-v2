import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Certificate from "./pages/Certificate";
import Project from "./pages/Project";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/certificate", element: <Certificate /> },
    { path: "/project", element: <Project /> },
    
]);

export default router;