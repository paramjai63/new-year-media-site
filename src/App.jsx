import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import WallpaperDetail from "./pages/WallpaperDetail.jsx";
import Footer from "./components/Footer.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import Home from "./components/Home.jsx"

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallpaper/:id" element={<WallpaperDetail />} />
        <Route path="category/:categoryId" element={<CategoriesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
