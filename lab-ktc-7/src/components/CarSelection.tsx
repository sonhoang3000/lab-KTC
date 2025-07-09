import { useState } from 'react';

const cars = ['Mercedes S600', 'BMW 750Li', 'Audi A8L', 'Lexus LS500'];
const colors = ['Black', 'White', 'Silver', 'Red'];

const CarSelection = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="max-w-xl mx-auto mt-10 ">
      <h1 className="font-bold text-4xl mb-8">Select your car</h1>
      <div className="mb-4 flex items-center gap-4">
        <label className="text-lg">Select a car</label>
        <select
          value={selectedCar}
          onChange={e => setSelectedCar(e.target.value)}
          className="text-base px-2 py-1 border"
        >
          {cars.map(car => (
            <option key={car} value={car}>{car}</option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex items-center gap-4">
        <label >Select a color</label>
        <select
          value={selectedColor}
          onChange={e => setSelectedColor(e.target.value)}
          className="text-base px-2 py-1 border"
        >
          {colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="mt-8 font-bold text-xl">
        You selected a {selectedColor} - {selectedCar}
      </div>
    </div>
  );
};

export default CarSelection;