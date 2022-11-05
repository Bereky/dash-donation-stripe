import Header from "./Header";
import Hero from "./Hero";
import Donation from "./Donation";
import Completion from "./Completion";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation-complete" element={<Completion />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
