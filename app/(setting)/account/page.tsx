import AccountTab from "@/component/accounttab";
import HeaderAndBack from "@/component/headerandback";
import React from "react";

const accounts = () => [
  {
    id: 1,
    img: "/google_icon.jpeg.svg",
    title: "Google",
    subtitle: false,
    connect: false,
  },
  {
    id: 2,
    img: "/facebook_icon.jpeg.svg",
    title: "Facebook",
    subtitle: true,
    connect: true,
  },
  {
    id: 3,
    img: "/x_icon.jpeg.svg",
    title: "Twitter",
    subtitle: true,
    connect: true,
  },
  {
    id: 4,
    img: "/instagrmcom_logo.png.svg",
    title: "Instagram",
    subtitle: false,
    connect: false,
  },
  {
    id: 5,
    img: "/snapchat_icon.jpeg.svg",
    title: "Snapchat",
    subtitle: false,
    connect: false,
  },
];

const Account = () => {
  return (
    <div>
      <HeaderAndBack
        arrow={true}
        title="Notification"
        className="text-[2rem] font-bold ml-[4.5rem]"
        style="mt-4 px-4 py-2 flex items-center border-b-[1px] border-borderInput"
      />
      <div className="mt-10 p-4">
        {accounts().map((account) => (
          <AccountTab
            key={account.id}
            img={account.img}
            title={account.title}
            subtitle={account.subtitle}
            connect={account.connect}
          />
        ))}
      </div>
    </div>
  );
};

export default Account;
