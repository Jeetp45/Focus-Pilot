import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Layout from './pages/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
