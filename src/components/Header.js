import React, { useState } from 'react';

const Header = () => {
  // สถานะสำหรับวันที่ที่เลือก
  const [selectedDate, setSelectedDate] = useState(new Date());

  // ฟังก์ชันจัดการเมื่อผู้ใช้เลือกวันที่จากปฏิทิน
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  // แปลงวันที่เป็น format ที่ต้องการสำหรับการแสดงผล
  const formatDate = (date) => {
    return date.toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // แปลงวันที่ให้อยู่ในรูปแบบ 'YYYY-MM-DD' สำหรับ input type="date"
  const getFormattedDateForInput = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // แปลงให้เป็น 2 หลัก
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* แสดงปฏิทินวันที่ */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/40" 
            alt="User Icon" 
            className="w-10 h-10 rounded-full mr-2" 
          />
          <div className="text-lg">{formatDate(selectedDate)}</div>
        </div>
        <div>
          <button
            className="bg-gray-200 p-2 rounded-lg focus:outline-none"
            onClick={() => document.getElementById('datePicker').click()}
          >
            📅
          </button>
          {/* input สำหรับเลือกวันที่ */}
          <input
            id="datePicker"
            type="date"
            className="hidden"
            value={getFormattedDateForInput(selectedDate)}  // ใส่ค่าที่ถูกต้องในรูปแบบ 'YYYY-MM-DD'
            onChange={handleDateChange}
          />
        </div>
      </div>

      {/* แสดงวันที่ในรูปแบบปฏิทิน */}
      <div className="mt-4 flex justify-center space-x-4">
        {['6', '7', '8', '9', '10', '11', '12'].map((day) => (
          <div
            key={day}
            className={`p-2 rounded-full ${day === selectedDate.getDate().toString() ? 'bg-gray-300' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
