import React from 'react';
import Button from '../Button';
import SadFace from '../icons/Sad';

const NoUser = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="text-center md:w-[28rem] px-4 w-full md:px-0">
        <div className="flex justify-center">
          <SadFace />
        </div>
        <p className="text-base my-4">Sorry, Nobody on Mozg goes by that name.</p>
        <p className="text-sm my-4">
          The person may have been banned or the username is incorrect.
        </p>
        <Button label="Go Home" extended />
        <p className="text-xs mt-14 text-gray-500">
          Use of this site constitutes acceptance of our User Agreement and Privacy Policy . ©2022
          mozg inc. All rights reserved. MOZG and the MOZG Logo are registered trademarks of mozg
          inc.
        </p>
      </div>
    </div>
  );
};

export default NoUser;
