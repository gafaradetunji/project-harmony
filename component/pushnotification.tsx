"use client";
import React, { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";

interface PushNotificationProps {
  index: number; // Index of the switch for API calls
  onToggle?: (newState: boolean) => void; // Optional callback for parent component (not used here)
}

const PushNotification: React.FC<PushNotificationProps> = ({ index }) => {
  const [isChecked, setIsChecked] = useState(false); // Local state for temporary storage

  const handleToggle = async () => {
    setIsChecked(!isChecked); // Update temporary state on toggle

    try {
      const response = await fetch(
        "https://your-api.com/push-notification-states",
        {
          method: "PATCH",
          body: JSON.stringify({ index, isEnabled: !isChecked }), // Send updated state
        },
      );

      if (response.ok) {
        const data = await response.json();
        setIsChecked(data[index].isEnabled); // Update based on API response
      } else {
        // Handle update error (e.g., display error message to user)
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  useEffect(() => {
    // No state fetching here, relies on parent for initial state
  }, []);

  return (
    <div>
      <Switch
        aria-label="Automatic updates"
        checked={isChecked}
        onChange={handleToggle}
      />
    </div>
  );
};

export default PushNotification;
