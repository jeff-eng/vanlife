import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

{
}
