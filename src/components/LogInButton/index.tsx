import React from "react";
import { Button } from "./style";

const LogInButton = () => {
  const handleLogInClick = () => {
    console.log("Login iniciado");
  };

  return <Button onClick={handleLogInClick}>Fazer Login</Button>;
};

export default LogInButton;
