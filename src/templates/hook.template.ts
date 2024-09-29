import { toCamelCase } from "../helper/stringCases";

export function hookTemplate(name: string): string {
  let name2 = toCamelCase(name);
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
