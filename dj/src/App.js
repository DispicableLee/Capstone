
import './styles/App.css';
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";
import AudioPlayer from './Components/AudioPlayer';
import FileUpload from './Components/FileUpload';

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
          <Link to="/">Hoe</Link>
        </li>
        <li>
          <Link to="/AudioPlayer">AudioPlayer</Link>
        </li>
        <li>
          <Link to="/FileUpload">FileUpload</Link>
        </li>
      </ul>
      <Routes>
          <Route path="/" element={<home />}/>
          <Route path="/AudioPlayer" element={<AudioPlayer/>}/>
          <Route path="/FileUpload" element={<FileUpload/>}/>
      </Routes>
    </div>
  );
}
