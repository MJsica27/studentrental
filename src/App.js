import './App.css';
import Nav from './Components/nav';
import {Route, Routes} from "react-router-dom";
import { Home, Service, ContactUs } from "./Components/pages";
import { Details } from './Components/pages/details';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
