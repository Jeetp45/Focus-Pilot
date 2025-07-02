import useAuth from '../../hooks/useAuth';

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className='flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md'>
      <input
        type='text'
        placeholder='Search...'
        className='px-4 py-2 rounded-lg border dark:bg-gray-700 dark:text-white'
      />
      <div className='flex items-center gap-4'>
        <span className='text-sm text-gray-700 dark:text-gray-300'>
          Welcome, {user?.username}
        </span>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Topbar;
