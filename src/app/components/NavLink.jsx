// NavLink.js
import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="text-[#dbd8e3] hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;
