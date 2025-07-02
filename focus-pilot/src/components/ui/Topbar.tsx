import useAuth from '../../hooks/useAuth';

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className='flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md'>
      <div className='flex items-center gap-4'>
        <span className='text-sm text-gray-700 dark:text-gray-300'>
          Welcome {user?.username}
        </span>
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Topbar;
