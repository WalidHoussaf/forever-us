import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoveLetter from './pages/LoveLetter';
import PhotoGallery from './pages/PhotoGallery';
import MusicPlayer from './pages/MusicPlayer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThingsILove from './pages/ThingsILove';
import LifeGoals from './pages/LifeGoals';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/love-letter" element={<LoveLetter />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/music-player" element={<MusicPlayer />} />
          <Route path="/things-i-love" element={<ThingsILove />} />
          <Route path="/life-goals" element={<LifeGoals />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;