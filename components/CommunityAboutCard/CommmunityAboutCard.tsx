import React from 'react';
import { HiChevronDown, HiDotsHorizontal, HiOutlineCake } from 'react-icons/hi';
import Button from '../Button';
import { CommunityAboutCardProps } from './CommunityAboutCard.types';

const CommunityAboutCard = (props: CommunityAboutCardProps) => {
  const { description, creationDate, buttonLabel, memberCount, buttonOutlined } = props;

  return (
    <div className="shadow-border rounded w-80 bg-white">
      <div className="bg-blue-400 font-semibold text-white flex justify-between items-center p-3 rounded-t">
        <p>About Community</p>
        <button type="button" className="btn flex items-center">
          <HiDotsHorizontal className="w-5 h-5" />
        </button>
      </div>
      <p className="p-3">{description}</p>
      <div className="p-3 pt-0">
        <div>
          <p className="font-semibold">
            {memberCount} <br />
            <span className="text-sm font-normal"> Members</span>
          </p>
        </div>
      </div>
      <div className="px-3">
        <hr />
      </div>
      <div className="p-3">
        <div className="flex items-center space-x-3 pb-3">
          <HiOutlineCake />
          <p>Created {creationDate}</p>
        </div>
        <Button
          label={buttonLabel}
          extended
          coloredOutline={buttonOutlined}
          outlined={buttonOutlined}
        />
      </div>
      <div className="px-3">
        <hr />
      </div>
      <div className="flex justify-between p-3 py-5 items-center">
        <p>Community Options</p>
        <button type="button" className="flex items-center">
          <HiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CommunityAboutCard;
