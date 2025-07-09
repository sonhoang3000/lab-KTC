import { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const [alerted, setAlerted] = useState(false);

  useEffect(() => {
    if (timer === 0 && !alerted) {
      alert("Time's up");
      setAlerted(true);
      return;
    }
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, alerted]);

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <h1 className="font-bold text-3xl">Count down from {timer}</h1>
    </div>
  );
};

export default Timer; 