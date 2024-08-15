import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import OurHistory from "./components/OurHistory";
import Contact from "./components/Contact";
import About from "./components/landingPage/About";
import WhyKenya from "./components/WhyKenya";
import Layouts from "./Layout/Layouts";
import Prices from "./components/Prices";
import NotFound from "./components/NotFound";

// style sheet 
import "./styles.css"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<About />} />
        <Route path="why-kenya" element={<WhyKenya />} />
        <Route path="our-history" element={<OurHistory />} />
        <Route path="prices" element={<Prices />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
