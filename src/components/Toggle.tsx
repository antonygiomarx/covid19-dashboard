import React, { useState } from 'react';
//@ts-ignore
import DarkModeToggle from 'react-dark-mode-toggle';

export default ({ onChange, DarkMode }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
};
