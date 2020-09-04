import React from 'react';

interface PortalProps {
  children: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  return <div className="Portal">{children}</div>;
};
