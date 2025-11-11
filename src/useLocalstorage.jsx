import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValueformarkdown, key2, initialValueforcompiled) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? saved : initialValueformarkdown;
  });
  const [compiled, setCompiled] = useState(() => {
    const saved = localStorage.getItem(key2);
    return saved !== null ? saved : initialValueforcompiled;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
    localStorage.setItem(key2, compiled);
  }, [value, compiled, key, key2]);
 
  return [value, setValue, compiled, setCompiled];
}
