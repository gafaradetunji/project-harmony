import Image from "next/image";
import React from "react";

const AccountTab: React.FC<AccountTabProps> = ({
  img,
  title,
  subtitle,
  connect,
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b-[1px] border-borderInput">
      <div className="flex items-center gap-2">
        <Image src={img} width={30} height={30} alt={title} />
        <div>
          <h4 className="text-[1rem] font-semibold font-lato">{title}</h4>
          <span className="text-[1rem] font-normal font-lato text-connectcolor">
            {subtitle ? "connected" : "not connected"}
          </span>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="text-[1rem] font-normal font-lato text-connectcolor"
        >
          {connect ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  );
};

export default AccountTab;
