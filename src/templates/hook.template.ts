
export function hookTemplate(name: string, name2: string): string {
    return `
import { useState, useEffect } from 'react';

function use${name}<T>(value: T, delay: number): T {
  const [${name2}Value, set${name}Value] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set${name}Value(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return ${name2}Value;
}

export default use${name};
`;
}
