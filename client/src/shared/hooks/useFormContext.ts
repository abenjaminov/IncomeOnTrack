import React, { useEffect } from 'react';
import { FormContext } from '../components/form/FormContext';

export const useFormContext = (key: string, initialValue: any) => {
  const result = React.useContext(FormContext);

  useEffect(() => {
    if(!key) return;
    
    result.register(key, initialValue);
  }, [key, initialValue])
  
  return {
    setValue: (value: any) => {
        result.setValue(key, value)
    },
    getValue: () => {
        return result.getValue(key);
    }
  };
};
