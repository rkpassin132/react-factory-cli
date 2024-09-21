"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextTemplate = contextTemplate;
function contextTemplate(name) {
    return "\nimport React, { createContext, useState, ReactNode, useContext } from \"react\";\n\n// Define the context type\ninterface ".concat(name, "ContextType {\n}\n\n// Create the context with default value as undefined\nconst ").concat(name, "Context = createContext<").concat(name, "ContextType | undefined>(undefined);\n\n// Provider component\ninterface ").concat(name, "ProviderProps {\n    children: ReactNode;\n}\n\nexport const ").concat(name, "Provider: React.FC<").concat(name, "ProviderProps> = ({ children }) => {\n\n    return (\n    <").concat(name, "Context.Provider value={{ }}>\n        {children}\n    </").concat(name, "Context.Provider>\n    );\n};\n\n// Custom hook to use ").concat(name, "Context\nexport const use").concat(name, " = () => {\n    const context = useContext(").concat(name, "Context);\n    if (!context) {\n    throw new Error(\"use").concat(name, " must be used within a ").concat(name, "Provider\");\n    }\n    return context;\n};\n    ");
}
