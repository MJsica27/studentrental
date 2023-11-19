import './App.css';
import Nav from './Components/nav';
import {Route, Routes} from "react-router-dom";
import { Home, Service, ContactUs } from "./Components/pages";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
