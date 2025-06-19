import type { WidgetProps } from '../../types';

const Widget = ({ title, value, children }: WidgetProps) => {
  return (
    <div className='p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md'>
      <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
        {title}
      </h3>
      <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
        {value}
      </p>
      {children}
    </div>
  );
};

export default Widget;
