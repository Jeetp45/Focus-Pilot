import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Layout from './pages/Layout';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
