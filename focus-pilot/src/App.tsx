import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Layout from './components/ui/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route index element={<Dashboard />} />
      <Route path='/tasks' element={<Tasks />} />
      <Route path='/' element={<Settings />} />
    </Routes>
  );
}

export default App;
