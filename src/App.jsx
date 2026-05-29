import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Game from './pages/Game';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import HiraganaTable from './pages/HiraganaTable';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="game" element={<Game />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
          <Route path="table" element={<HiraganaTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
