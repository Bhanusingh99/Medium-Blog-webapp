import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Dev', 'ui-ux', 'Tech', 'Start-up'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-box text-white border w-full py-2 px-4" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Choose Tag'}
      </div>

      {isOpen && (
        <div className="dropdown-options bg-gray-800 w-full cursor-pointer">
          {options.map((option,index) => (
            <div key={index} onClick={() => handleOptionClick(option)} className='text-white my-1 px-2 py-1 
            cursor-pointer border'>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
