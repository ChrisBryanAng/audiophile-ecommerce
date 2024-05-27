import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Headphones,
  Speakers,
  Earphones,
  Product,
  Checkout,
  NotFound,
} from "./pages";
import { Navbar, HomeFooter, Cart } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-dvh w-dvw font-Manrope overflow-x-hidden">
      <div className="flex h-[100px] w-full lg:justify-center lg:items-center bg-black2">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && <Cart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/:category/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <HomeFooter />
    </div>
  );
};

export default App;
