"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hookTemplate = hookTemplate;
var stringCases_1 = require("../helper/stringCases");
function hookTemplate(name) {
    var name2 = (0, stringCases_1.toCamelCase)(name);
    return "\nimport { useState, useEffect } from 'react';\n\nfunction use".concat(name, "<T>(value: T, delay: number): T {\n  const [").concat(name2, "Value, set").concat(name, "Value] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      set").concat(name, "Value(value);\n    }, delay);\n\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n\n  return ").concat(name2, "Value;\n}\n\nexport default use").concat(name, ";\n");
}
