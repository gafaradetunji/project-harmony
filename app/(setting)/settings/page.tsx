import HeaderAndBack from "@/component/headerandback";
import RepeatLinks from "@/component/repeatLinks";
import React from "react";

const generalSettings = () => [
  {
    id: "1",
    img: "/User.svg",
    title: "Account",
    link: "/account",
    arrow: true,
  },
  {
    id: "2",
    img: "/Vector.svg",
    title: "Notification",
    link: "/notification",
    arrow: true,
  },
  {
    id: "3",
    img: "/manage.svg",
    title: "Manage links",
    link: "/managelinks",
    arrow: true,
  },
  {
    id: "4",
    img: "/Shield Minimalistic.svg",
    title: "Password & Security",
    link: "/password",
    arrow: true,
  },
  {
    id: "5",
    img: "/Trash Bin Trash.svg",
    title: "Delete Account",
    link: "/delete",
    arrow: true,
  },
  {
    id: "6",
    img: "/Login 5.svg",
    title: "Log Out",
    link: "/logout",
    arrow: true,
  },
];

const feedbackSettings = () => [
  {
    id: "1",
    img: "/Shield Warning.svg",
    title: "Report bug",
    link: "/report bug",
    arrow: true,
  },
  {
    id: "2",
    img: "/Plain.svg",
    title: "Send feedback",
    link: "/send feedback",
    arrow: true,
  },
];

const Settings = () => {
  return (
    <div>
      <div>
        <HeaderAndBack
          title="Settings"
          className="text-[2rem] font-bold"
          style="mt-4 px-4 py-2 flex items-center justify-center border-b-[1px] border-borderInput"
        />
      </div>
      <div className="mt-10 mx-4 py-4 bg-lightgrey px-2 rounded-md mb-6">
        <h3 className="text-[1.2rem] font-lato font-medium">General</h3>
        {generalSettings().map((setting) => (
          <RepeatLinks
            key={setting.id}
            img={setting.img}
            title={setting.title}
            link={setting.link}
            arrow={setting.arrow}
          />
        ))}
      </div>

      <div className="mt-10 mx-4 py-4 bg-lightgrey px-2 rounded-md mb-12">
        <h3 className="text-[1.2rem] font-lato font-medium">Feedback</h3>
        {feedbackSettings().map((setting) => (
          <RepeatLinks
            key={setting.id}
            img={setting.img}
            title={setting.title}
            link={setting.link}
            arrow={setting.arrow}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
