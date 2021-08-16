import React from "react";

// set the expected type of each of the Props
interface Props {
  borderWidth: string;
  borderRadius: string;
  borderColor: string;
  color: string;
  background: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  fontSize: string;
  className: string;
}

// create the Button component
// pull in the Prop types from above
const Button: React.FC<Props> = ({ 
    borderWidth,
    borderRadius,
    borderColor,
    color,
    background,
    children,
    height,
    onClick, 
    width,
    fontSize,
    className
  }) => { 
  // actual component to render
    return (
    <button 
      onClick={onClick}
      className={className}
      style={{
         backgroundColor: background,
         color,
         borderWidth,
         borderRadius,
         borderColor,
         height,
         width,
         fontSize,
      }}
    >
    {children}
    </button>
  );
}

// export so it's reusable in other components/pages
export default Button;