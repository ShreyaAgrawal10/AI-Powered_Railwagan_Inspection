import React, { createContext, useState } from 'react';

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [activebar, setActive] = useState('Home'); // Initial active state

  const handleActiveChange = (newActive) => {
    setActive(newActive);
  };
  const data = { activebar, handleActiveChange };
  return (
    <ActiveContext.Provider value={{ activebar, handleActiveChange ,data}}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
