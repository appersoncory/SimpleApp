// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import MatchesPage from './pages/MatchesPage';
import GalleryPage from './pages/GalleryPage';
import EditMatchPageTable from './pages/EditMatchPageTable';
import AddMatchPageTable from './pages/AddMatchPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [match, setMatchToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Web Development Portfolio Project</h1>
            <p>This website is a showcase of my journey into web development, complete with a simple web app that lets you add, edit, and remove database entries—highlighting my ability to build engaging and practical digital solutions.</p>
          </header>

          <Navigation />
          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/matches" element={<MatchesPage setMatch={setMatchToEdit}/>} />
                    <Route path="/create" element={<AddMatchPageTable />} /> 
                    <Route path="/update" element={<EditMatchPageTable matchToEdit={match} />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
              </section>
          </main>

          <footer>
          <p>&copy; 2024 Cory Apperson</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;