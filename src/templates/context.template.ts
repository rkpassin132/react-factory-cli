export function contextTemplate(name: string): string {
    return `
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the context type
interface ${name}ContextType {
}

// Create the context with default value as undefined
const ${name}Context = createContext<${name}ContextType | undefined>(undefined);

// Provider component
interface ${name}ProviderProps {
    children: ReactNode;
}

export const ${name}Provider: React.FC<${name}ProviderProps> = ({ children }) => {

    return (
    <${name}Context.Provider value={{ }}>
        {children}
    </${name}Context.Provider>
    );
};

// Custom hook to use ${name}Context
export const use${name} = () => {
    const context = useContext(${name}Context);
    if (!context) {
    throw new Error("use${name} must be used within a ${name}Provider");
    }
    return context;
};
    `;
  }