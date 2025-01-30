import React from 'react';
import logoImage from '../assets/wakanda.png';

function Logo({ width = '200px', src = logoImage, alt = 'Logo' }) {
  return (
    <div>
      <img src={src} alt={alt} width={width} />
    </div>
  );
}

export default Logo;
