"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionalComponent = functionalComponent;
exports.classComponent = classComponent;
function getStyle(name, config) {
    var importStyle = "import '".concat((config === null || config === void 0 ? void 0 : config.styleLocation) || '.', "/").concat(name, ".css'; // Import the CSS file");
    if ((config === null || config === void 0 ? void 0 : config.folderStructure) == "advance") {
        importStyle = "import './".concat(name, ".css'; // Import the CSS file");
    }
    return importStyle;
}
// Functional Component Template
function functionalComponent(name, config) {
    return "\nimport React, { useLayoutEffect, useRef, useState, useEffect } from 'react';\n".concat(getStyle(name, config), "\n\nconst ").concat(name, ": React.FC = () => {\n  const divRef = useRef(null);\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n\n    // Cleanup (component will unmount)\n    return () => {\n      console.log('Component unmounting');\n    };\n  }, []); \n\n  useLayoutEffect(() => {\n    // This runs synchronously after DOM mutations\n  });\n\n  return (\n    <div>").concat(name, " Component</div>\n  );\n};\n\nexport default ").concat(name, ";\n  ");
}
// Class Component Template
function classComponent(name, config) {
    return "\nimport React, { Component } from 'react';\n".concat(getStyle(name, config), "\n\nclass ").concat(name, " extends Component {\n  constructor(props) {\n    super(props);\n    // Initialize state\n    this.state = {\n    };\n  }\n\n  componentDidMount() {\n    // Called immediately after the component is mounted.\n  }\n\n  componentDidUpdate(prevProps, prevState) {\n    // Called after the component updates due to state or prop changes.\n  }\n\n  componentWillUnmount() {\n    // Called immediately before the component is unmounted and destroyed.\n  }\n\n  shouldComponentUpdate(nextProps, nextState) {\n    // Determines if the component should update or not.\n    // return true | false;\n  }\n\n  render() {\n    return (\n      <div>").concat(name, " Component</div>\n    );\n  }\n}\n\nexport default ").concat(name, ";\n  ");
}
