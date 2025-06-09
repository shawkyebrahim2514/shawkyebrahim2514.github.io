/** @jsxImportSource @emotion/react */

import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import About from '../containers/About';
import Skills from '../containers/Skills';
import Education from '../containers/Education';
import Experience from '../containers/Experience';
import Projects from '../containers/Projects';
import Contacts from '../containers/Contacts';
import MarkdownEditor from '../containers/MarkdownEditor';

const pathElementRoutes = {
  "": <About />,
  "skills": <Skills />,
  "education": <Education />,
  "experience": <Experience />,
  "projects": <Projects />,
  "contacts": <Contacts />,
  "markdown": <MarkdownEditor />,
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-4">
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<About />} />
              {Object.entries(pathElementRoutes).map(([path, element]) => (
                <Route key={path} path={`/${path}`} element={element} />
              ))}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </div>
  );
}