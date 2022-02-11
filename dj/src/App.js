
import './App.css';
import { Routes, Route, Link, redirectTo} from "react-router-dom";
import AudioPlayer from './Components/AudioPlayer';
import FileUpload from './Components/FileUpload';
import LoginHooks from './Components/gLogIn';
import LogoutHooks from './Components/gLogout';
// require/use Express
// set up body parser
export default function App() {
  function RequireAuth({ children, redirectTo}) {
    //replace useSelector with localstorage and get the google authenticator token (googleID)
    let isAuthenticated= localStorage.getItem(newAuthRes.id_token);return isAuthenticated? children: <Navigate to = {redirectTo} />;}
  return (
    <div className="App">
      <header className="App-header">
          <h1>LemonCord</h1>
          <LogoutHooks/>
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
      <Routes>
          <Route path="/Login" element={<LoginHooks/>}/>
          <Route path="/AudioPlayer" element={<AudioPlayer/>}/>
          <Route path="/FileUpload" element={
            <RequireAuth redirectTo="/Login">
              <FileUpload/>
            </RequireAuth>
          }
          />
      </Routes>
      
    </div>
  );
}