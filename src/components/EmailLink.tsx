'use client';

import { useState, useEffect } from 'react';

const EmailLink = () => {
  const [mounted, setMounted] = useState(false);
  const email = 'contact@valentin-marot.fr';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="text-sky-400">Email</span>;
  }

  return (
    <a 
      href={`mailto:${email}`}
      className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
    >
      {email}
    </a>
  );
};

export default EmailLink;
