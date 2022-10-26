import Hangout from "./pages/hangout";
import "./App.css";
import {FirebaseContextProvider} from "./firebase/Firebase";
import {BrowserRouter,Routes,Route, useParams, Outlet} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Hangout/>
    </div>
  );
}

export default App;