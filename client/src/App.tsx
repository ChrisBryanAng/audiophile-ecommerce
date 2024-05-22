import { Routes, Route } from "react-router-dom";

import {
  Home,
  Headphones,
  Speakers,
  Earphones,
  Product,
  NotFound,
} from "./pages";
import { Navbar, HomeFooter } from "./components";

const App = () => {
  return (
    <div className="h-dvh w-dvw font-Manrope overflow-x-hidden">
      <div className="flex h-[100px] w-full lg:justify-center lg:items-center bg-black2">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/:category/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <HomeFooter />
    </div>
  );
};

export default App;
