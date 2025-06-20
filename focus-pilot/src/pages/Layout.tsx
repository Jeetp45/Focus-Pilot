import Sidebar from '../components/ui/Sidebar';
import Topbar from '../components/ui/Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Topbar />
        <main className='p-6 overflow-y-auto flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
