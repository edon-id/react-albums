import "./App.css";
import { Navbar } from "./components/Navbar";
import { ArtistPage } from "./components/ArtistPage";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ArtistsList } from "./components/ArtistsList";
import { AlbumPage } from "./components/AlbumPage";
import { ErrorPage } from './components/ErrorPage';

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 offset-md-4 BackgroundColor">
              <Navbar />
              <Routes>
                <Route path="/" element={<ArtistsList />} />
                <Route path="artist/:id" element={<ArtistPage />} />
                <Route path="artist/:id/:albumId" element={<AlbumPage />} />
                <Route path="*" element={<ErrorPage/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
