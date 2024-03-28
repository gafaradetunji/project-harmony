import HeaderAndBack from "@/component/headerandback";
import RepeatLinks from "@/component/repeatLinks";
import React from "react";

const notify = () => [
  {
    id: "1",
    title: "Donation Confirmations",
    pushnotification: true,
  },
  {
    id: "2",
    title: "New Fundraising Alert",
    pushnotification: true,
  },
  {
    id: "3",
    title: "Thank You Messages",
    pushnotification: true,
  },
  {
    id: "4",
    title: "Email Notification",
    pushnotification: true,
  },
  {
    id: "5",
    title: "SMS Notification",
    pushnotification: true,
  },
  {
    id: "6",
    title: "Publish Donation",
    pushnotification: true,
  },
  {
    id: "7",
    title: "Urgent Appeals",
    pushnotification: true,
  },
];

const Notification = () => {
  return (
    <div>
      <div>
        <HeaderAndBack
          arrow={true}
          title="Notification"
          className="text-[2rem] font-bold ml-[4.5rem]"
          style="mt-4 px-4 py-2 flex items-center border-b-[1px] border-borderInput"
        />

        <div className="mt-10">
          {notify().map((item) => (
            <RepeatLinks
              key={item.id}
              title={item.title}
              pushnotification={item.pushnotification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
