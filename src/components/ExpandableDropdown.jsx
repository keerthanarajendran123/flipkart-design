import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'; 

const ExpandableDropdown = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
    setIsHovered(false);
  };

  return (
    <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-item" style={{ backgroundColor: open || isHovered ? '#E8F0EA' : 'white' }}>
        <img src={category.image} alt={category.name} className="dropdown-icon" />
        <span className="dropdown-text">{category.name}</span>
        {category.subcategories && (open ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />)}
      </div>
      {category.subcategories && (
        <div className="submenu" style={{ display: open ? 'block' : 'none' }}>
          {category.subcategories.map((subcategory, index) => (
            <NestedDropdown key={subcategory.id} category={subcategory} />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedDropdown = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="nested-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="nested-dropdown-item" style={{ backgroundColor: isHovered ? '#E8F0EA' : 'white' }}>
        <span className="nested-dropdown-text">{category.name}</span>
        {category.submenu && <RiArrowDropDownLine />} {/* Use react-icons for dropdown arrows */}
      </div>
      {category.submenu && (
        <div className="subsubmenu" style={{ display: isHovered ? 'block' : 'none' }}>
          {category.submenu.map((subsubmenu) => (
            <div key={subsubmenu.id} className="subsubmenu-item" style={{ backgroundColor: isHovered ? '#E8F0EA' : 'white' }}>
              <span className="subsubmenu-text">{subsubmenu.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableDropdown;

