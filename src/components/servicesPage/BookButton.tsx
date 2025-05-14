import React from 'react';

interface BookAppointmentButtonProps {
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const BookAppointmentButton: React.FC<BookAppointmentButtonProps> = ({
  onClick,
  fullWidth = true,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex justify-center items-center py-4 px-6 rounded-md 
        bg-red-500 hover:bg-red-600 active:bg-red-700 
        text-white font-medium transition-colors 
        duration-200 focus:outline-none focus:ring-2 focus:ring-red-400
        ${fullWidth ? 'w-full' : 'w-auto'} 
        ${className}
      `}
    >
      Book Appointment
    </button>
  );
};

export default BookAppointmentButton;