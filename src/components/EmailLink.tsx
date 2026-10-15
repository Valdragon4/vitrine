'use client';

import { useState, useEffect } from 'react';

const EmailLink = () => {
  const [mounted, setMounted] = useState(false);
  const email = 'contact@valentin-marot.fr';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="text-ink-300">Email</span>;
  }

  return (
    <a
      href={`mailto:${email}`}
      className="text-sm text-ink-300 hover:text-signal-400 transition-colors duration-200"
    >
      {email}
    </a>
  );
};

export default EmailLink;
