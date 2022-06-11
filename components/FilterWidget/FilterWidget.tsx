import React from 'react';
import { HiArrowUp, HiExternalLink, HiFire, HiHome, HiLogout, HiStar } from 'react-icons/hi';

const Icon = 'w-7 h-7';
const IconGroup = 'flex items-center hover:text-blue-400 hover:bg-blue-50 rounded-full p-2';

const FilterWidget = () => {
  return (
    <div className="hidden md:flex rounded shadow-border justify-between items-center px-5 py-3 text-gray-400 w-[640px]">
      <div className="flex space-x-1">
        <button type="button" className={IconGroup}>
          <HiHome className={Icon} />
          <p className="font-bold">Best</p>
        </button>
        <button type="button" className={IconGroup}>
          <HiFire className={Icon} />
          <p className="font-bold">Hot</p>
        </button>
        <button type="button" className={IconGroup}>
          <HiStar className={Icon} />
          <p className="font-bold">New</p>
        </button>
        <button type="button" className={IconGroup}>
          <HiArrowUp className={Icon} />
          <p className="font-bold">Top</p>
        </button>
        <button type="button" className={IconGroup}>
          <HiExternalLink className={Icon} />
        </button>
      </div>
      <div>
        <button>
          <HiLogout className={Icon} />
        </button>
      </div>
    </div>
  );
};

export default FilterWidget;
