'use client';

import { useState, useEffect } from 'react';

const EmailLink = () => {
  const [mounted, setMounted] = useState(false);
  const email = 'contact@valentin-marot.fr';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="text-violet-600">Email</span>;
  }

  return (
    <a 
      href={`mailto:${email}`}
      className="text-violet-600 hover:text-violet-700 transition-colors duration-200"
    >
      {email}
    </a>
  );
};

export default EmailLink;
