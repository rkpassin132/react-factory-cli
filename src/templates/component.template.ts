import { toCamelCase } from "../helper/stringCases";

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
export function functionalComponentTemplate(name: string, withSeoTag:boolean=false): string {
  let name2 = toCamelCase(name);
  return `
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';${
  withSeoTag ? `\nimport { Helmet } from 'react-helmet-async';` : ''}
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
  ${withSeoTag ?
  `\n const renderSeoTags = () => {
    return (
      <Helmet>
        <title>${name} Page</title>
        <meta property="og:title" content="" />
        <link rel="canonical" href="/${name2}" />
      </Helmet>
    );
  };`
  : ''}

  return (
    <>${
      withSeoTag ? '\n      {renderSeoTags()}' : ''}
      <div className="${name2}-container">${name} Component</div>
    </>
  );
};

export default ${name};
  `;
}

// Class Component Template
export function classComponentTemplate(name: string, withSeoTag:boolean=false): string {
  let name2 = toCamelCase(name);
  return `
import React, { Component } from 'react';${
  withSeoTag ? `\nimport { Helmet } from 'react-helmet-async';` : ''}
${getStyle(name)}

class ${name} extends Component {
  constructor(props: any) {
    super(props);
    // Initialize state
    this.state = {
    };
  }

  componentDidMount() {
    // Called immediately after the component is mounted.
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // Called after the component updates due to state or prop changes.
  }

  componentWillUnmount() {
    // Called immediately before the component is unmounted and destroyed.
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    // Determines if the component should update or not.
    return true;
  }
  ${withSeoTag ?
    `\nrenderSeoTags() {
      return (
        <Helmet>
          <title>${name} Page</title>
          <meta property="og:title" content="" />
          <link rel="canonical" href="/${name2}" />
        </Helmet>
      );
    };`
    : ''}

  render() {
    return (
      <>${
        withSeoTag ? '\n{this.renderSeoTags()}' : ''}
        <div className="${name2}-container">${name} Component</div>
      </>
    );
  }
}

export default ${name};
  `;
}

// test file Template
export function testTemplate(name: string): string {
  let name2 = toCamelCase(name);
  return `
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('describe ${name2}', () => {
  test('test ${name2}', () => {
  });
});
  `;
}

export function componentTestTemplate(name: string): string {
  return `
import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import ${name} from './${name}'; // Adjust the import path as needed

describe('${name}Page Component', () => {
  const title = '${name} Page';
  const description = '';

  // Utility to render the component with HelmetProvider
  const renderWithHelmetProvider = (ui: React.ReactElement) => {
    return render(<HelmetProvider>{ui}</HelmetProvider>);
  };

  test('renders ${name}Page component correctly', () => {
    renderWithHelmetProvider(<${name} />);

    // Check if the title and description are rendered in the component
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
  `;
}