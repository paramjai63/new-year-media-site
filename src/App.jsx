import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import WallpaperSection from "./components/WallpaperSection.jsx";
import WallpaperDetail from "./pages/WallpaperDetail.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  return (
    <div className="bg-slate-950 text-white min-h-screen">
    
      <Header />

      <Routes>
        <Route path="/" element={<WallpaperSection />} />
        <Route path="/wallpaper/:id" element={<WallpaperDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
