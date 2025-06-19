import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-400';

  return (
    <aside className='bg-gray-900 text-white w-64 h-full p-4 hidden md:block'>
      <h2 className='text-2xl font-bold mb-6'>FocusPilot</h2>
      <nav className='flex flex-col gap-4'>
        <NavLink to='/' className={navLinkClass}>
          Dashboard
        </NavLink>
        <NavLink to='/tasks' className={navLinkClass}>
          Tasks
        </NavLink>
        <NavLink to='/settings' className={navLinkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
