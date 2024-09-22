import { toCamelCase } from "../utils/stringCases";

function getStyle(name: string): string {
  let importStyle = `import './${name}.scss'; // Import the style file`;
  return importStyle;
}

export function styleTemplate(name: string) {
  name = toCamelCase(name);
  return `.${name}-container{

}`;
}

// Functional Component Template
export function functionalComponentTemplate(name: string): string {
  let name2 = toCamelCase(name);
  return `
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
${getStyle(name)}

const ${name}: React.FC = () => {
  const divRef = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {

    // Cleanup (component will unmount)
    return () => {
      console.log('Component unmounting');
    };
  }, []); 

  useLayoutEffect(() => {
    // This runs synchronously after DOM mutations
  });

  return (
    <div className="${name2}-container">${name} Component</div>
  );
};

export default ${name};
  `;
}

// Class Component Template
export function classComponentTemplate(name: string): string {
  let name2 = toCamelCase(name);
  return `
import React, { Component } from 'react';
${getStyle(name)}

class ${name} extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
    };
  }

  componentDidMount() {
    // Called immediately after the component is mounted.
  }

  componentDidUpdate(prevProps, prevState) {
    // Called after the component updates due to state or prop changes.
  }

  componentWillUnmount() {
    // Called immediately before the component is unmounted and destroyed.
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Determines if the component should update or not.
    // return true | false;
  }

  render() {
    return (
      <div className="${name2}-container">${name} Component</div>
    );
  }
}

export default ${name};
  `;
}