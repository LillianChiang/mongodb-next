import React from "react";
import Button from "@mui/material/Button";

const MyButton: React.FC = () => {
  const handleClick = () => {
    // Redirect to the '/dashboard' route after button click
    window.location.href = "/dashboard";
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className="rounded-md py-1 px-4"
        onClick={handleClick}
      >
        Sign in
      </Button>
    </>
  );
};

export default MyButton;
