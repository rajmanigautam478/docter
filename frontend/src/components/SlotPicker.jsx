import React from 'react';

const SlotPicker = ({ 
  days, 
  timeSlots, 
  selectedDayIndex, 
  setSelectedDayIndex, 
  selectedTime, 
  setSelectedTime 
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Booking slots
      </h3>
      
      {/* Weekday selector */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8 hide-scrollbar">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDayIndex(index);
              setSelectedTime(''); // Reset time on day change
            }}
            className={`min-w-[85px] py-6 rounded-full flex flex-col items-center justify-center transition-all duration-300 border shadow-sm hover:shadow-md ${
              selectedDayIndex === index 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            <span className="text-sm font-semibold mb-2 uppercase tracking-wide">{day.dayName}</span>
            <span className="text-xl font-bold">{day.dateNumber}</span>
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="flex flex-wrap gap-4">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(time)}
            className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm ${
              selectedTime === time 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SlotPicker;
