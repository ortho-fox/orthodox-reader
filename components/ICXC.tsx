// components/ICXC.tsx
import React from 'react';

interface ICXCProps {
  children: React.ReactNode;
}

const ICXC: React.FC<ICXCProps> = ({ children }) => {
  return <span style={{ color: '#E70041' }}>{children}</span>;
};

export default ICXC;
