import Sidebar from '../components/ui/Sidebar';
import Topbar from '../components/ui/Topbar';
import Widget from '../components/ui/Widget';

const Dashboard = () => {
  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Topbar />
        <main className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto'>
          <Widget title='Focus Sessions' value='3 hrs 20 mins' />
          <Widget title='Tasks Completed' value='7' />
          <Widget title='Breaks Taken' value='4' />
          <Widget title='Distractions Detected' value='2' />
          <Widget title='Next Task' value='Refactor Dashboard UI' />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
