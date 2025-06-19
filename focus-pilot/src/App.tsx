import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/tasks' element={<Tasks />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
}

export default App;
