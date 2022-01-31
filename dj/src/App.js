
import './App.css';
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";
import AudioPlayer from './Components/AudioPlayer';
import FileUpload from './Components/FileUpload';
import SongList from './Components/SongList';
// require/use Express
// set up body parser
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>LemonCord</h1>
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AudioPlayer">AudioPlayer</Link>
        </li>
        <li>
          <Link to="/FileUpload">FileUpload</Link>
        </li>
      </ul>
      <SongList/>

      <Routes>
          <Route path="/AudioPlayer" element={<AudioPlayer/>}/>
          <Route path="/FileUpload" element={<FileUpload/>}/>
      </Routes>
    </div>
  );
}
