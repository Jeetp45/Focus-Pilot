import Widget from '../components/ui/Widget';

const Dashboard = () => {
  return (
    <main className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto'>
      <Widget title='Focus Sessions' value='3 hrs 20 mins' />
      <Widget title='Tasks Completed' value='7' />
      <Widget title='Breaks Taken' value='4' />
      <Widget title='Distractions Detected' value='2' />
      <Widget title='Next Task' value='Refactor Dashboard UI' />
    </main>
  );
};

export default Dashboard;
