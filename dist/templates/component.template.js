"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleTemplate = styleTemplate;
exports.functionalComponentTemplate = functionalComponentTemplate;
exports.classComponentTemplate = classComponentTemplate;
exports.testTemplate = testTemplate;
exports.componentTestTemplate = componentTestTemplate;
var stringCases_1 = require("../helper/stringCases");
function getStyle(name) {
    var importStyle = "import './".concat(name, ".scss'; // Import the style file");
    return importStyle;
}
function styleTemplate(name) {
    name = (0, stringCases_1.toCamelCase)(name);
    return ".".concat(name, "-container{\n\n}");
}
// Functional Component Template
function functionalComponentTemplate(name, withSeoTag) {
    if (withSeoTag === void 0) { withSeoTag = false; }
    var name2 = (0, stringCases_1.toCamelCase)(name);
    return "\nimport React, { useLayoutEffect, useRef, useState, useEffect } from 'react';".concat(withSeoTag ? "\nimport { Helmet } from 'react-helmet-async';" : '', "\n").concat(getStyle(name), "\n\nconst ").concat(name, ": React.FC = () => {\n  const divRef = useRef(null);\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n\n    // Cleanup (component will unmount)\n    return () => {\n      console.log('Component unmounting');\n    };\n  }, []); \n\n  useLayoutEffect(() => {\n    // This runs synchronously after DOM mutations\n  });\n  ").concat(withSeoTag ?
        "\n const renderSeoTags = () => {\n    return (\n      <Helmet>\n        <title>".concat(name, " Page</title>\n        <meta property=\"og:title\" content=\"\" />\n        <link rel=\"canonical\" href=\"/").concat(name2, "\" />\n      </Helmet>\n    );\n  };")
        : '', "\n\n  return (\n    <>").concat(withSeoTag ? '\n      {renderSeoTags()}' : '', "\n      <div className=\"").concat(name2, "-container\">").concat(name, " Component</div>\n    </>\n  );\n};\n\nexport default ").concat(name, ";\n  ");
}
// Class Component Template
function classComponentTemplate(name, withSeoTag) {
    if (withSeoTag === void 0) { withSeoTag = false; }
    var name2 = (0, stringCases_1.toCamelCase)(name);
    return "\nimport React, { Component } from 'react';".concat(withSeoTag ? "\nimport { Helmet } from 'react-helmet-async';" : '', "\n").concat(getStyle(name), "\n\nclass ").concat(name, " extends Component {\n  constructor(props: any) {\n    super(props);\n    // Initialize state\n    this.state = {\n    };\n  }\n\n  componentDidMount() {\n    // Called immediately after the component is mounted.\n  }\n\n  componentDidUpdate(prevProps: any, prevState: any) {\n    // Called after the component updates due to state or prop changes.\n  }\n\n  componentWillUnmount() {\n    // Called immediately before the component is unmounted and destroyed.\n  }\n\n  shouldComponentUpdate(nextProps: any, nextState: any) {\n    // Determines if the component should update or not.\n    return true;\n  }\n  ").concat(withSeoTag ?
        "\nrenderSeoTags() {\n      return (\n        <Helmet>\n          <title>".concat(name, " Page</title>\n          <meta property=\"og:title\" content=\"\" />\n          <link rel=\"canonical\" href=\"/").concat(name2, "\" />\n        </Helmet>\n      );\n    };")
        : '', "\n\n  render() {\n    return (\n      <>").concat(withSeoTag ? '\n{this.renderSeoTags()}' : '', "\n        <div className=\"").concat(name2, "-container\">").concat(name, " Component</div>\n      </>\n    );\n  }\n}\n\nexport default ").concat(name, ";\n  ");
}
// test file Template
function testTemplate(name) {
    var name2 = (0, stringCases_1.toCamelCase)(name);
    return "\nimport React from 'react';\nimport { render, screen } from '@testing-library/react';\n\ndescribe('describe ".concat(name2, "', () => {\n  test('test ").concat(name2, "', () => {\n  });\n});\n  ");
}
function componentTestTemplate(name) {
    return "\nimport React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport { HelmetProvider } from 'react-helmet-async';\nimport ".concat(name, " from './").concat(name, "'; // Adjust the import path as needed\n\ndescribe('").concat(name, "Page Component', () => {\n  const title = '").concat(name, " Page';\n  const description = '';\n\n  // Utility to render the component with HelmetProvider\n  const renderWithHelmetProvider = (ui: React.ReactElement) => {\n    return render(<HelmetProvider>{ui}</HelmetProvider>);\n  };\n\n  test('renders ").concat(name, "Page component correctly', () => {\n    renderWithHelmetProvider(<").concat(name, " />);\n\n    // Check if the title and description are rendered in the component\n    expect(screen.getByText(title)).toBeInTheDocument();\n    expect(screen.getByText(description)).toBeInTheDocument();\n  });\n});\n  ");
}
