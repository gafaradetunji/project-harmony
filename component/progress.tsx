import React from "react";

interface ProgressBarProps {
  bgcolor: string;
  completed?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right" as "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
