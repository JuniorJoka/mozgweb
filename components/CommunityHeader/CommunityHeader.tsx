import React from 'react';

const CommunityHeader = () => {
  return (
    <div>
      <div className="h-32 bg-teal-500 relative" />

      <div className="md:flex md:justify-center">
        <div className="flex flex-row md:w-[960px] md:relative">
          <div className="w-14 h-14 rounded-full bg-teal-600 border-4 border-white -mt-8 absolute left-3"></div>
          <div className="flex justify-between items-center mt-4 flex-grow p-3">
            <p className="font-semibold text-sm">r/algorithms</p>
            <button type="button" className="">
              Joined
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CommunityHeader;
