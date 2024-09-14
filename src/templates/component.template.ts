import { Config } from "../utils/rfcConfig";

function getStyle(name: string, config: Config | null): string {
  let importStyle = `import '${config?.styleLocation || '.'}/${name}.css'; // Import the CSS file`;
  if(config?.folderStructure == "advance"){
    importStyle = `import './${name}.css'; // Import the CSS file`;
  }
  return importStyle;
}

// Functional Component Template
export function functionalComponent(name: string, config: Config | null): string {
  return `
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
${getStyle(name, config)}

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
    <div>${name} Component</div>
  );
};

export default ${name};
  `;
}

// Class Component Template
export function classComponent(name: string, config: Config | null): string {
  return `
import React, { Component } from 'react';
${getStyle(name, config)}

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
      <div>${name} Component</div>
    );
  }
}

export default ${name};
  `;
}