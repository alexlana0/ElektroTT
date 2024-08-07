import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./style";

interface SignUpButtonProps {
  to: string;
  children: React.ReactNode;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', width: '50%' }}>
      <Button primary>
        {children}
      </Button>
    </Link>
  );
};

export default SignUpButton;
