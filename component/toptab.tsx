import React from "react";

const TopTab = () => {
  return (
    <div>
      <ul className="w-full bg-black flex gap-2">
        <li className="text-[#df0000]">Published</li>
        <li>Draft</li>
      </ul>
      <span className="border-[2px] border-[#df0000] w-24 bg-borderInput"></span>
    </div>
  );
};

export default TopTab;
