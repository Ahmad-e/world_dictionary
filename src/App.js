import {  Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Countries from "./pages/countries";
import Capital from "./pages/capital";
import Language from "./pages/language";
import Home from './home';
import Down from './down';
import NotFound from './svgs/notfound';
import './App.css';


function App() {
  return (
    <div className="App">
    <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search_by_language" element={<Language />} />
            <Route path="/search_by_capital" element={<Capital />} />
            <Route path="/search_by_countries" element={<Countries />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>    
      <Down />
    </div>
  );
}

export default App;
