import { Routes, Route } from "react-router-dom";

import { Home, Headphones, NotFound } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="h-dvh w-dvw font-Manrope overflow-x-hidden">
      <div className="fixed z-50 flex h-[100px] w-full lg:justify-center lg:items-center bg-transparent">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
