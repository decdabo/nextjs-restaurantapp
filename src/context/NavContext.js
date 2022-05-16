import { createContext, useContext, useState } from 'react';

export const NavContext = createContext();

export const useNav = () =>  {
  const context = useContext(NavContext);
  if (!context) {
    console.log('Error deploying NavContext! 🛑') 
    return {}
  }

  return context;
}

export const NavProvider = ({ children }) => {
  const [ navState, setNavState ] = useState(false)
  
  return (
    <NavContext.Provider value={{ 
      isActive: navState,
      setNavState
     }}>
      {children}
    </NavContext.Provider>
  )
}
