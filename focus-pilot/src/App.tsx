import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Layout from './pages/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import useAuth from './hooks/useAuth';
import AuthForm from './pages/AuthForm';

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <AuthForm />}
        />
        <Route
          path='/'
          element={user ? <Dashboard /> : <Navigate to='/login' />}
        />
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
