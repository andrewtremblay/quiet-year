import React, { Dispatch, SetStateAction } from 'react';

export const useStateWithLocalStorage = (localStorageKey: string) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
   
    return [value, setValue] as [string, Dispatch<SetStateAction<string>>];
  };
  