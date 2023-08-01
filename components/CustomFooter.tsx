// components/CustomFooter.tsx
import React from 'react';

const CustomFooter: React.FC = () => {
  return (
    <footer className="py-4 text-center border-t text-xs">
      <a href="#" target="_blank">
        ☧ Orthodox Reader &middot; © {new Date().getFullYear()} &middot; built by <a href="#" className="link">🦊 orthofox</a>
      </a>
    </footer>
  );
};

export default CustomFooter;
