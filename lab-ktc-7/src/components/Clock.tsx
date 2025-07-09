import { useEffect, useState } from 'react';

function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleTimeString('en-US', { hour12: true });
  return formatted;
}

const Clock = () => {
  const time = useClock();
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-blue-900 text-white text-3xl font-bold rounded-xl px-10 py-6 shadow-lg">
        {time}
      </div>
    </div>
  );
};

export default Clock; 