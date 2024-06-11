import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/AboutUs";
import MainLayout from "./layout/MainLayout";
import Classes from "../src/pages/Classes";
import Teacher from "./pages/Teacher";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/teacher' element={<Teacher />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
