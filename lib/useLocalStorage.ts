import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        const parsed = JSON.parse(item);
        setValue(parsed);
      }
    } catch (error) {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      setValue(initialValue);
    }
    
    setHydrated(true);
  }, [key, initialValue]);

  useEffect(() => {
    if (typeof window === 'undefined' || !hydrated) return;
    
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Ignore localStorage errors
    }
  }, [key, value, hydrated]);

  return [value, setValue, hydrated] as const;
}

export { useLocalStorage };