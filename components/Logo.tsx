import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 333.21 343.93" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      <g>
        <path 
          d="M333.21,343.93h-205.03v-8h197.03v-59.15h-75.24V74.13h-76.94v202.65h-94.56V75.35H0V0h267.33v8H8v59.35h78.47v201.44h78.56V66.13h92.94v202.65h75.24v75.15ZM281.01,0c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4ZM113.91,335.93c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Z" 
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default Logo;