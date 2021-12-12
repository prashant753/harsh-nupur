import './App.css';
import Footer from './Footer';
import HeroSectionHeader from './HeroSectionHeader';
import ImageGallery from './ImageGallery';
import MusicHeader from './MusicHeader';

function App() {
  return (
    <div className="App">
      <HeroSectionHeader />
      <MusicHeader />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
