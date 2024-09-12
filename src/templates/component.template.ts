// Functional Component Template
export function functionalComponent(name: string): string {
  return `import React from 'react';\n\nexport const ${name} = () => <div>${name}</div>;\n`;
}

// Class Component Template
export function classComponent(name: string): string {
  return `import React, { Component } from 'react';\n\nexport class ${name} extends Component {\n  render() {\n    return <div>${name}</div>;\n  }\n}\n`;
}

// Higher-Order Functional Component Template
export function higherOrderFunctionalComponent(name: string): string {
  return `import React from 'react';\n\nexport function with${name}(WrappedComponent: React.ComponentType) {\n  return (props: any) => <WrappedComponent {...props} />;\n}\n`;
}

// Routing Component Template
export function routingComponent(name: string): string {
  return `import React from 'react';\nimport { Route, Switch } from 'react-router-dom';\n\nexport const ${name} = () => (\n  <Switch>\n    <Route path="/${name.toLowerCase()}" component={() => <div>${name}</div>} />\n  </Switch>\n);\n`;
}
